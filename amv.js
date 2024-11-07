const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const output = document.getElementById('output');

const ID3v1_GENRES = [
    'Blues', 'Classic Rock', 'Country', 'Dance', 'Disco', 'Funk', 'Grunge', 'Hip-Hop',
    'Jazz', 'Metal', 'New Age', 'Oldies', 'Other', 'Pop', 'R&B', 'Rap', 'Reggae',
    'Rock', 'Techno', 'Industrial', 'Alternative', 'Ska', 'Death Metal', 'Pranks',
    'Soundtrack', 'Euro-Techno', 'Ambient', 'Trip-Hop', 'Vocal', 'Jazz+Funk', 'Fusion',
    'Trance', 'Classical', 'Instrumental', 'Acid', 'House', 'Game', 'Sound Clip',
    'Gospel', 'Noise', 'Alternative Rock', 'Bass', 'Soul', 'Punk', 'Space', 'Meditative',
    'Instrumental Pop', 'Instrumental Rock', 'Ethnic', 'Gothic', 'Darkwave', 'Techno-Industrial',
    'Electronic', 'Pop-Folk', 'Eurodance', 'Dream', 'Southern Rock', 'Comedy', 'Cult',
    'Gangsta', 'Top 40', 'Christian Rap', 'Pop/Funk', 'Jungle', 'Native US', 'Cabaret',
    'New Wave', 'Psychedelic', 'Rave', 'Showtunes', 'Trailer', 'Lo-Fi', 'Tribal',
    'Acid Punk', 'Acid Jazz', 'Polka', 'Retro', 'Musical', 'Rock & Roll', 'Hard Rock',
    'Folk', 'Folk-Rock', 'National Folk', 'Swing', 'Fast Fusion', 'Bebob', 'Latin',
    'Revival', 'Celtic', 'Bluegrass', 'Avantgarde', 'Gothic Rock', 'Progressive Rock',
    'Psychedelic Rock', 'Symphonic Rock', 'Slow Rock', 'Big Band', 'Chorus', 'Easy Listening',
    'Acoustic', 'Humour', 'Speech', 'Chanson', 'Opera', 'Chamber Music', 'Sonata',
    'Symphony', 'Booty Bass', 'Primus', 'Porn Groove', 'Satire', 'Slow Jam', 'Club',
    'Tango', 'Samba', 'Folklore', 'Ballad', 'Power Ballad', 'Rhythmic Soul', 'Freestyle',
    'Duet', 'Punk Rock', 'Drum Solo', 'A Cappella', 'Euro-House', 'Dance Hall', 'Goa',
    'Drum & Bass', 'Club-House', 'Hardcore', 'Terror', 'Indie', 'BritPop', 'Negerpunk',
    'Polsk Punk', 'Beat', 'Christian Gangsta Rap', 'Heavy Metal', 'Black Metal', 'Crossover',
    'Contemporary Christian', 'Christian Rock', 'Merengue', 'Salsa', 'Thrash Metal',
    'Anime', 'JPop', 'Synthpop'
];

const ETCO_TYPES = {
    0x00: 'padding (has no meaning)',
    0x01: 'end of initial silence',
    0x02: 'intro start',
    0x03: 'main part start',
    0x04: 'outro start',
    0x05: 'outro end',
    0x06: 'verse start',
    0x07: 'refrain start',
    0x08: 'interlude start',
    0x09: 'theme start',
    0x0A: 'variation start',
    0x0B: 'key change',
    0x0C: 'time change',
    0x0D: 'momentary unwanted noise',
    0x0E: 'sustained noise',
    0x0F: 'sustained noise end',
    0x10: 'intro end',
    0x11: 'main part end',
    0x12: 'verse end',
    0x13: 'refrain end',
    0x14: 'theme end',
    0x15: 'profanity',
    0x16: 'profanity end'
};

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropZone.addEventListener('drop', handleDrop);
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFileSelect);

function handleDrop(e) {
    processFile(e.dataTransfer.files[0]);
}

function handleFileSelect(e) {
    processFile(e.target.files[0]);
}

async function processFile(file) {
    if (!file) return;

    try {
        const metadata = {
            'File': {
                'FileName': file.name,
                'FileSize': formatFileSize(file.size),
                'FileType': getFileType(file),
                'MIMEType': file.type,
                'FileModifyDate': new Date(file.lastModified).toISOString()
            }
        };

        const arrayBuffer = await file.arrayBuffer();
        const view = new DataView(arrayBuffer);

        // Detect file format and parse accordingly
        const magic = getFileMagic(view);

        // Parse format-specific metadata
        if (magic.startsWith('ID3')) {
            // MP3/ID3 tags
            const id3v2 = await parseID3v2(arrayBuffer);
            if (Object.keys(id3v2).length > 0) {
                metadata['ID3v2'] = id3v2;
            }

            const mpegInfo = await parseMPEG(arrayBuffer);
            if (Object.keys(mpegInfo).length > 0) {
                metadata['MPEG'] = mpegInfo;
            }

            const id3v1 = await parseID3v1(arrayBuffer);
            if (id3v1) {
                metadata['ID3v1'] = id3v1;
            }
        } else if (magic.startsWith('RIFF')) {
            // WAV format
            const wavInfo = await parseWAV(arrayBuffer);
            if (Object.keys(wavInfo).length > 0) {
                metadata['WAV'] = wavInfo;
            }
        } else if (magic.startsWith('OggS')) {
            // OGG format
            const oggInfo = await parseOGG(arrayBuffer);
            if (Object.keys(oggInfo).length > 0) {
                metadata['OGG'] = oggInfo;
            }
        } else if (magic.startsWith('fLaC')) {
            // FLAC format
            const flacInfo = await parseFLAC(arrayBuffer);
            if (Object.keys(flacInfo).length > 0) {
                metadata['FLAC'] = flacInfo;
            }
        }

        output.textContent = formatOutput(metadata);
    } catch (error) {
        console.error('Error:', error);
        output.textContent = `Error processing file: ${error.message}\n${error.stack}`;
    }
}

function getFileMagic(view) {
    try {
        let magic = '';
        for (let i = 0; i < 4; i++) {
            magic += String.fromCharCode(view.getUint8(i));
        }
        return magic;
    } catch {
        return '';
    }
}

function getFileType(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    const types = {
        'mp3': 'MP3',
        'wav': 'Wave',
        'ogg': 'Ogg',
        'oga': 'Ogg',
        'flac': 'FLAC',
        'm4a': 'AAC',
        'aac': 'AAC',
        'wma': 'WMA',
        'aif': 'AIFF',
        'aiff': 'AIFF'
    };
    return types[ext] || 'Unknown';
}

async function parseWAV(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const data = {};

    // Parse WAV format chunk
    let offset = 12; // Skip RIFF header
    while (offset < arrayBuffer.byteLength) {
        const chunkId = String.fromCharCode(
            view.getUint8(offset),
            view.getUint8(offset + 1),
            view.getUint8(offset + 2),
            view.getUint8(offset + 3)
        );
        const chunkSize = view.getUint32(offset + 4, true);

        if (chunkId === 'fmt ') {
            data['AudioFormat'] = view.getUint16(offset + 8, true);
            data['NumChannels'] = view.getUint16(offset + 10, true);
            data['SampleRate'] = view.getUint32(offset + 12, true) + ' Hz';
            data['ByteRate'] = view.getUint32(offset + 16, true) + ' bytes/sec';
            data['BlockAlign'] = view.getUint16(offset + 20, true);
            data['BitsPerSample'] = view.getUint16(offset + 22, true);
        }

        offset += 8 + chunkSize;
    }

    return data;
}

async function parseOGG(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const data = {};

    // Basic OGG page header info
    data['VorbisVersion'] = view.getUint8(4);
    data['AudioChannels'] = view.getUint8(5);

    // Basic Vorbis info from first page
    const pageSegments = view.getUint8(26);
    const offset = 27 + pageSegments;  // Base offset after segment table

    // Check for Vorbis identification header
    if (view.getUint8(offset) === 1) {
        data['VorbisVersion'] = view.getUint32(offset + 7, true);
        data['AudioChannels'] = view.getUint8(offset + 11);
        data['SampleRate'] = view.getUint32(offset + 12, true) + ' Hz';
        data['BitRateNominal'] = Math.floor(view.getInt32(offset + 20, true) / 1000) + ' kbps';

        // Look for vendor string in comment header
        let pos = offset + 28;  // Skip vorbis header
        while (pos < arrayBuffer.byteLength - 7) {
            if (view.getUint8(pos) === 0x03 && view.getUint8(pos + 1) === 0x76) {  // Comment header
                pos += 7;  // Skip packet type and "vorbis"
                const vendorLength = view.getUint32(pos, true);
                pos += 4;

                if (vendorLength > 0 && pos + vendorLength <= arrayBuffer.byteLength) {
                    const vendorBytes = new Uint8Array(arrayBuffer.slice(pos, pos + vendorLength));
                    data['Vendor'] = new TextDecoder().decode(vendorBytes);
                    break;
                }
            }
            pos++;
        }
    }

    return data;
}

async function parseFLAC(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const data = {
        'FLAC': {},
        'Vorbis': {}
    };

    let offset = 4;
    while (offset < arrayBuffer.byteLength) {
        const blockHeader = view.getUint8(offset);
        const blockType = blockHeader & 0x7F;
        const isLast = (blockHeader & 0x80) !== 0;

        const blockSize = (view.getUint8(offset + 1) << 16) |
            (view.getUint8(offset + 2) << 8) |
            view.getUint8(offset + 3);

        if (blockType === 0) {
            data.FLAC['BlockSizeMin'] = view.getUint16(offset + 4, true);
            data.FLAC['BlockSizeMax'] = view.getUint16(offset + 6, true);

            data.FLAC['FrameSizeMin'] = (view.getUint8(offset + 8) << 16) |
                (view.getUint8(offset + 9) << 8) |
                view.getUint8(offset + 10);

            data.FLAC['FrameSizeMax'] = (view.getUint8(offset + 11) << 16) |
                (view.getUint8(offset + 12) << 8) |
                view.getUint8(offset + 13);

            const sampleRate = ((view.getUint8(offset + 14) << 12) |
                (view.getUint8(offset + 15) << 4) |
                (view.getUint8(offset + 16) >> 4));
            data.FLAC['SampleRate'] = sampleRate;

            const channels = ((view.getUint8(offset + 16) >> 1) & 0x7) + 1;
            data.FLAC['Channels'] = channels;

            const bitsPerSample = (((view.getUint8(offset + 16) & 1) << 4) |
                (view.getUint8(offset + 17) >> 4)) + 1;
            data.FLAC['BitsPerSample'] = bitsPerSample;

            const totalSamples = ((BigInt(view.getUint8(offset + 17) & 0xF) << 32n) |
                BigInt(view.getUint8(offset + 18) << 24) |
                BigInt(view.getUint8(offset + 19) << 16) |
                BigInt(view.getUint8(offset + 20) << 8) |
                BigInt(view.getUint8(offset + 21))).toString();
            data.FLAC['TotalSamples'] = totalSamples;

            const md5Array = new Uint8Array(arrayBuffer.slice(offset + 22, offset + 38));
            const md5Signature = Array.from(md5Array)
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
            data.FLAC['MD5Signature'] = md5Signature;
        }
        else if (blockType === 4) {
            try {
                let pos = offset + 4;

                // Vendor length
                const vendorLength = view.getUint32(pos, true);
                pos += 4;

                const vendorString = new TextDecoder().decode(
                    new Uint8Array(arrayBuffer.slice(pos, pos + vendorLength))
                );
                data.Vorbis['Vendor'] = vendorString;
                pos += vendorLength;

                // Number of comments
                const commentListLength = view.getUint32(pos, true);
                pos += 4;

                // Read each comment
                for (let i = 0; i < commentListLength; i++) {
                    const commentLength = view.getUint32(pos, true);
                    pos += 4;

                    const commentString = new TextDecoder().decode(
                        new Uint8Array(arrayBuffer.slice(pos, pos + commentLength))
                    );
                    pos += commentLength;

                    const [key, ...valueParts] = commentString.split('=');
                    const value = valueParts.join('=');

                    // Map Vorbis keys to output format
                    const keyMap = {
                        'ALBUM': 'Album',
                        'ARTIST': 'Artist',
                        'ALBUMARTIST': 'Albumartist',
                        'TITLE': 'Title',
                        'DATE': 'Date',
                        'GENRE': 'Genre',
                        'TRACKNUMBER': 'TrackNumber',
                        'DISCNUMBER': 'Discnumber',
                        'COPYRIGHT': 'Copyright',
                        'ENCODED_BY': 'Encodedby',
                        'ENCODER': 'Encoder',
                        'LYRICS': 'Lyrics',
                        'ISRC': 'ISRCNumber',
                        'COMMENT': 'Comment',
                        'WOAS': 'Woas'
                    };

                    const mappedKey = keyMap[key.toUpperCase()];
                    if (mappedKey) {
                        data.Vorbis[mappedKey] = value;
                    }
                }
            } catch (e) {
                console.error('Error parsing Vorbis comments:', e);
            }
        }

        offset += 4 + blockSize;
        if (isLast) break;
    }

    return data;
}

function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    return size.toFixed(1) + ' ' + units[unitIndex];
}

function formatOutput(metadata) {
    let output = '';
    const sections = {
        'File': metadata.File,
        'FLAC': metadata.FLAC?.FLAC,
        'Vorbis': metadata.FLAC?.Vorbis,
        'ID3v2': metadata.ID3v2,
        'MPEG': metadata.MPEG,
        'ID3v1': metadata.ID3v1,
        'WAV': metadata.WAV,
        'OGG': metadata.OGG,
    };

    for (const [section, data] of Object.entries(sections)) {
        if (data && Object.keys(data).length > 0) {
            output += `---- ${section} ----\n`;
            for (const [key, value] of Object.entries(data)) {
                if (value !== undefined && value !== null && value !== '') {
                    output += `${key.padEnd(30)}: ${value}\n`;
                }
            }
            output += '\n';
        }
    }
    return output;
}

function decodeText(buffer, encoding, offset = 0) {
    let decoder;
    switch (encoding) {
        case 0: // ISO-8859-1
            decoder = new TextDecoder('iso-8859-1');
            break;
        case 1: // UTF-16 with BOM
        case 2: // UTF-16BE
            decoder = new TextDecoder('utf-16');
            break;
        case 3: // UTF-8
            decoder = new TextDecoder('utf-8');
            break;
        default:
            decoder = new TextDecoder('utf-8');
    }
    return decoder.decode(buffer).replace(/\0/g, '');
}

function findTerminator(array, encoding, start = 0) {
    if (encoding === 0 || encoding === 3) { // ISO-8859-1 or UTF-8
        for (let i = start; i < array.length; i++) {
            if (array[i] === 0) return i;
        }
    } else { // UTF-16
        for (let i = start; i < array.length - 1; i += 2) {
            if (array[i] === 0 && array[i + 1] === 0) return i;
        }
    }
    return array.length;
}

function calculateFrameSize(layer, bitrate, sampleRate, padding) {
    if (layer === '1') {
        return Math.floor(((12 * bitrate * 1000 / sampleRate) + padding) * 4);
    } else {
        return Math.floor(((144 * bitrate * 1000 / sampleRate) + padding));
    }
}

async function parseID3v2(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const data = {};

    // Check for ID3v2 header
    if (String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2)) !== 'ID3') {
        return data;
    }

    const version = view.getUint8(3);
    const revision = view.getUint8(4);
    const flags = view.getUint8(5);

    const size = (view.getUint8(6) << 21) |
        (view.getUint8(7) << 14) |
        (view.getUint8(8) << 7) |
        view.getUint8(9);

    data['Version'] = `2.${version}.${revision}`;
    data['Size'] = size + ' bytes';
    data['Flags'] = flags;

    // Complete frame mapping for ID3v2.4
    const frameMapping = {
        'AENC': 'AudioEncryption',
        'APIC': 'AttachedPicture',
        'ASPI': 'AudioSeekPointIndex',
        'COMM': 'Comment',
        'COMR': 'Commercial',
        'ENCR': 'EncryptionMethod',
        'EQU2': 'Equalization2',
        'ETCO': 'EventTimingCodes',
        'GEOB': 'GeneralEncapsulatedObject',
        'GRID': 'GroupIdentification',
        'LINK': 'LinkedInformation',
        'MCDI': 'MusicCDIdentifier',
        'MLLT': 'MPEGLocationLookupTable',
        'OWNE': 'Ownership',
        'PRIV': 'PrivateFrame',
        'PCNT': 'PlayCounter',
        'POPM': 'Popularimeter',
        'POSS': 'PositionSynchronization',
        'RBUF': 'RecommendedBufferSize',
        'RVA2': 'RelativeVolumeAdjustment2',
        'RVRB': 'Reverb',
        'SEEK': 'Seek',
        'SIGN': 'Signature',
        'SYTC': 'SynchronizedTempoCodes',
        'TALB': 'Album',
        'TBPM': 'BeatsPerMinute',
        'TCOM': 'Composer',
        'TCON': 'Genre',
        'TCOP': 'Copyright',
        'TDEN': 'EncodingTime',
        'TDLY': 'PlaylistDelay',
        'TDOR': 'OriginalReleaseTime',
        'TDRC': 'RecordingTime',
        'TDRL': 'ReleaseTime',
        'TDTG': 'TaggingTime',
        'TENC': 'EncodedBy',
        'TEXT': 'Lyricist',
        'TFLT': 'FileType',
        'TIPL': 'InvolvedPeople',
        'TIT1': 'ContentGroup',
        'TIT2': 'Title',
        'TIT3': 'Subtitle',
        'TKEY': 'InitialKey',
        'TLAN': 'Language',
        'TLEN': 'Length',
        'TMCL': 'MusicianCredits',
        'TMED': 'Media',
        'TMOO': 'Mood',
        'TOAL': 'OriginalAlbum',
        'TOFN': 'OriginalFilename',
        'TOLY': 'OriginalLyricist',
        'TOPE': 'OriginalArtist',
        'TOWN': 'FileOwner',
        'TPE1': 'Artist',
        'TPE2': 'Band',
        'TPE3': 'Conductor',
        'TPE4': 'InterpretedBy',
        'TPOS': 'PartOfSet',
        'TPRO': 'ProducedNotice',
        'TPUB': 'Publisher',
        'TRCK': 'Track',
        'TRSN': 'InternetRadioStationName',
        'TRSO': 'InternetRadioStationOwner',
        'TSOA': 'AlbumSortOrder',
        'TSOP': 'PerformerSortOrder',
        'TSOT': 'TitleSortOrder',
        'TSRC': 'ISRC',
        'TSSE': 'EncoderSettings',
        'TSST': 'SetSubtitle',
        'TXXX': 'UserDefinedText',
        'UFID': 'UniqueFileIdentifier',
        'USER': 'TermsOfUse',
        'WCOM': 'CommercialInformation',
        'WCOP': 'CopyrightInformation',
        'WOAF': 'OfficialAudioFileWebpage',
        'WOAR': 'OfficialArtistWebpage',
        'WOAS': 'OfficialAudioSourceWebpage',
        'WORS': 'OfficialInternetRadioStationHomepage',
        'WPAY': 'Payment',
        'WPUB': 'PublishersOfficialWebpage'
    };

    // Picture types for APIC frames
    const pictureTypes = {
        0x00: 'Other',
        0x01: 'File Icon',
        0x02: 'Other File Icon',
        0x03: 'Front Cover',
        0x04: 'Back Cover',
        0x05: 'Leaflet Page',
        0x06: 'Media',
        0x07: 'Lead Artist',
        0x08: 'Artist',
        0x09: 'Conductor',
        0x0A: 'Band',
        0x0B: 'Composer',
        0x0C: 'Lyricist',
        0x0D: 'Recording Location',
        0x0E: 'During Recording',
        0x0F: 'During Performance',
        0x10: 'Movie Screen Capture',
        0x11: 'A Bright Colored Fish',
        0x12: 'Illustration',
        0x13: 'Band Logo',
        0x14: 'Publisher Logo'
    };

    let pos = 10; // Start after header
    let commentIndex = 1;
    let lastSeenCommentLanguage = '';

    while (pos < size + 10) {
        // Get frame ID
        let frameID = '';
        for (let i = 0; i < 4; i++) {
            const char = view.getUint8(pos + i);
            if (char === 0) break;
            frameID += String.fromCharCode(char);
        }

        if (frameID === '') break;

        // Get frame size and flags
        const frameSize = (view.getUint8(pos + 4) << 24) |
            (view.getUint8(pos + 5) << 16) |
            (view.getUint8(pos + 6) << 8) |
            view.getUint8(pos + 7);
        const frameFlags = (view.getUint8(pos + 8) << 8) | view.getUint8(pos + 9);

        if (frameSize > 0) {
            const contentStart = pos + 10;
            const contentEnd = contentStart + frameSize;
            const frameData = new Uint8Array(arrayBuffer.slice(contentStart, contentEnd));

            try {
                switch (true) {
                    // Standard text frames
                    case frameID.startsWith('T'): {
                        const encoding = frameData[0];
                        const text = decodeText(frameData.slice(1), encoding);

                        if (frameID === 'TXXX') {
                            const parts = text.split('\0').filter(Boolean);
                            if (parts.length >= 2) {
                                data['UserDefinedText'] = `(${parts[0]}) ${parts[1]}`;
                            }
                        } else {
                            const key = frameMapping[frameID] || frameID;

                            // Special handling for specific frames
                            switch (frameID) {
                                case 'TDRC':
                                    data[key] = text.substring(0, 4); // Extract year
                                    break;
                                case 'TLEN':
                                    data[key] = (parseInt(text) / 1000).toFixed(3) + ' s';
                                    break;
                                case 'TBPM':
                                    data[key] = parseInt(text) || 0;
                                    break;
                                default:
                                    data[key] = text;
                            }
                        }
                        break;
                    }

                    // Comment Frame
                    case frameID === 'COMM': {
                        const encoding = frameData[0];
                        const language = String.fromCharCode(...frameData.slice(1, 4));
                        const descEnd = findTerminator(frameData, encoding, 4);
                        const description = decodeText(frameData.slice(4, descEnd), encoding);
                        const comment = decodeText(frameData.slice(descEnd + 1), encoding);

                        const formattedComment = description ?
                            `(${description}) ${comment}` :
                            comment;

                        if (lastSeenCommentLanguage === language) {
                            data[`Comment_${commentIndex++}`] = formattedComment;
                        } else {
                            data['Comment'] = formattedComment;
                            lastSeenCommentLanguage = language;
                        }
                        break;
                    }

                    // Picture Frame
                    case frameID === 'APIC': {
                        const encoding = frameData[0];
                        let pos = 1;

                        // Find MIME type
                        while (frameData[pos] !== 0 && pos < frameData.length) pos++;
                        const mimeType = decodeText(frameData.slice(1, pos), 0);
                        pos++;

                        const pictureType = frameData[pos];
                        pos++;

                        // Description
                        const descEnd = findTerminator(frameData, encoding, pos);
                        const description = decodeText(frameData.slice(pos, descEnd), encoding);

                        data['PictureMIMEType'] = mimeType;
                        data['PictureType'] = pictureTypes[pictureType] || 'Unknown';
                        data['PictureDescription'] = description;
                        data['Picture'] = `Picture present (${frameData.length - descEnd - 1} bytes)`;
                        break;
                    }

                    // URL link frames
                    case frameID.startsWith('W'): {
                        const url = decodeText(frameData, 0);
                        const key = frameMapping[frameID] || frameID;
                        data[key] = url;
                        break;
                    }

                    // Event Timing Codes
                    case frameID === 'ETCO': {
                        const format = frameData[0];
                        const events = [];
                        let offset = 1;

                        while (offset < frameData.length - 4) {
                            const type = frameData[offset];
                            const timestamp = (frameData[offset + 1] << 24) |
                                (frameData[offset + 2] << 16) |
                                (frameData[offset + 3] << 8) |
                                frameData[offset + 4];

                            events.push({
                                type: ETCO_TYPES[type] || 'Unknown',
                                timestamp: timestamp
                            });

                            offset += 5;
                        }

                        data['EventTimingCodes'] = {
                            format: format,
                            events: events
                        };
                        break;
                    }
                }
            } catch (e) {
                console.warn(`Failed to parse frame ${frameID}:`, e);
            }
        }

        pos += 10 + frameSize;
    }

    return data;
}

async function parseMPEG(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const data = {};

    let offset = 0;
    if (String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2)) === 'ID3') {
        offset = 10 + ((view.getUint8(6) << 21) |
            (view.getUint8(7) << 14) |
            (view.getUint8(8) << 7) |
            view.getUint8(9));
    }

    while (offset < arrayBuffer.byteLength - 4) {
        if (view.getUint8(offset) === 0xFF && (view.getUint8(offset + 1) & 0xE0) === 0xE0) {
            const header = view.getUint32(offset);

            // Version parsing
            const versionBits = (header >> 19) & 3;
            const versions = ['2.5', 'reserved', '2', '1'];
            data['MPEGAudioVersion'] = versions[versionBits];

            // Layer parsing
            const layerBits = (header >> 17) & 3;
            const layers = ['reserved', '3', '2', '1'];
            data['AudioLayer'] = layers[layerBits];

            // Protection bit
            data['ProtectionBit'] = ((header >> 16) & 1) ? 'Not Protected' : 'Protected';

            // Enhanced bitrate calculation
            const bitrateIndex = (header >> 12) & 0xF;
            const bitrates = {
                '1': {
                    '1': [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448],
                    '2': [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384],
                    '3': [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320]
                },
                '2': {
                    '1': [0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256],
                    '2': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                    '3': [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]
                }
            };

            const version = versions[versionBits] === '1' ? '1' : '2';
            const layer = layers[layerBits];
            if (version !== 'reserved' && layer !== 'reserved') {
                data['AudioBitrate'] = bitrates[version][layer][bitrateIndex] + ' kbps';
            }

            // Sample rate
            const sampleRateIndex = (header >> 10) & 3;
            const sampleRates = {
                '1': [44100, 48000, 32000],
                '2': [22050, 24000, 16000],
                '2.5': [11025, 12000, 8000]
            };
            const ver = versions[versionBits];
            if (ver in sampleRates) {
                data['SampleRate'] = sampleRates[ver][sampleRateIndex] + ' Hz';
            }

            // Padding bit
            data['PaddingBit'] = ((header >> 9) & 1) ? 'Padded' : 'Not Padded';

            // Private bit
            data['PrivateBit'] = ((header >> 8) & 1) ? 'Set' : 'Not Set';

            // Channel mode
            const channelMode = (header >> 6) & 3;
            const modes = ['Stereo', 'Joint Stereo', 'Dual Channel', 'Single Channel'];
            data['ChannelMode'] = modes[channelMode];

            if (channelMode === 1) {  // Joint Stereo
                const modeExt = (header >> 4) & 3;
                data['MSStereo'] = (modeExt & 2) ? 'On' : 'Off';
                data['IntensityStereo'] = (modeExt & 1) ? 'On' : 'Off';
                data['JointStereoBands'] = ((modeExt & 0x0F) + 1) * 4;
            }

            // Copyright and original media flags
            data['CopyrightFlag'] = ((header >> 3) & 1) ? 'True' : 'False';
            data['OriginalMedia'] = ((header >> 2) & 1) ? 'True' : 'False';

            // Emphasis
            const emphasis = header & 3;
            const emphasisTypes = ['None', '50/15 ms', 'Reserved', 'CCIT J.17'];
            data['Emphasis'] = emphasisTypes[emphasis];

            // Frame size calculation
            const paddingSize = ((header >> 9) & 1) ? 1 : 0;
            const frameSize = calculateFrameSize(layer, bitrates[version][layer][bitrateIndex],
                sampleRates[ver][sampleRateIndex], paddingSize);
            data['FrameSize'] = frameSize + ' bytes';

            break;
        }
        offset++;
    }

    return data;
}

async function parseID3v1(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    if (arrayBuffer.byteLength < 128) return null;

    const offset = arrayBuffer.byteLength - 128;
    const tag = String.fromCharCode(
        view.getUint8(offset),
        view.getUint8(offset + 1),
        view.getUint8(offset + 2)
    );

    if (tag !== 'TAG') return null;

    const decoder = new TextDecoder('iso-8859-1');

    const cleanString = (str) => {
        return str
            .replace(/[\x00-\x1F\x7F]/g, '')
            .replace(/\u0000/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    };

    const commentBytes = new Uint8Array(arrayBuffer.slice(offset + 97, offset + 127));
    let comment = decoder.decode(commentBytes);
    let track = null;

    if (commentBytes[28] === 0 && commentBytes[29] !== 0) {
        track = commentBytes[29];
        comment = decoder.decode(commentBytes.slice(0, 28));
    }

    const genreIndex = view.getUint8(offset + 127);
    const genre = genreIndex < ID3v1_GENRES.length ? ID3v1_GENRES[genreIndex] : 'Unknown';

    // Extract and clean each field
    const id3v1Data = {
        'Title': cleanString(decoder.decode(new Uint8Array(arrayBuffer.slice(offset + 3, offset + 33)))),
        'Artist': cleanString(decoder.decode(new Uint8Array(arrayBuffer.slice(offset + 33, offset + 63)))),
        'Album': cleanString(decoder.decode(new Uint8Array(arrayBuffer.slice(offset + 63, offset + 93)))),
        'Year': cleanString(decoder.decode(new Uint8Array(arrayBuffer.slice(offset + 93, offset + 97)))),
        'Comment': cleanString(comment),
        'Genre': genre,
    };

    if (track !== null) {
        id3v1Data['Track'] = track;
    }

    return id3v1Data;
}