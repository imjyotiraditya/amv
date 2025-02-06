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

const VORBIS_COMMENT_KEYS = {
    // Basic metadata
    'TITLE': 'Title',
    'ARTIST': 'Artist',
    'ALBUM': 'Album',
    'ALBUMARTIST': 'AlbumArtist',
    'DATE': 'Date',
    'YEAR': 'Year',
    'GENRE': 'Genre',
    'TRACKNUMBER': 'TrackNumber',
    'TRACKTOTAL': 'TrackTotal',
    'DISCNUMBER': 'DiscNumber',
    'DISCTOTAL': 'DiscTotal',
    'COMPOSER': 'Composer',
    'CONDUCTOR': 'Conductor',
    'PERFORMER': 'Performer',
    'ENSEMBLE': 'Ensemble',
    'PART': 'Part',
    'PARTNUMBER': 'PartNumber',
    'LOCATION': 'Location',

    // Technical metadata
    'ENCODER': 'Encoder',
    'ENCODEDBY': 'EncodedBy',
    'ENCODED_BY': 'EncodedBy',
    'ENCODING': 'Encoding',
    'ENCODERSETTINGS': 'EncoderSettings',
    'LENGTH': 'Length',
    'SAMPLERATE': 'SampleRate',
    'CHANNELS': 'Channels',
    'BPS': 'BitsPerSample',
    'BITRATE': 'Bitrate',
    'REPLAYGAIN_TRACK_GAIN': 'ReplayGainTrackGain',
    'REPLAYGAIN_TRACK_PEAK': 'ReplayGainTrackPeak',
    'REPLAYGAIN_ALBUM_GAIN': 'ReplayGainAlbumGain',
    'REPLAYGAIN_ALBUM_PEAK': 'ReplayGainAlbumPeak',

    // Additional metadata
    'DESCRIPTION': 'Description',
    'COMMENT': 'Comment',
    'COPYRIGHT': 'Copyright',
    'LICENSE': 'License',
    'PUBLISHER': 'Publisher',
    'ORGANIZATION': 'Organization',
    'CONTACT': 'Contact',
    'ISRC': 'ISRC',
    'BARCODE': 'Barcode',
    'CATALOGNUMBER': 'CatalogNumber',
    'VERSION': 'Version',
    'LANGUAGE': 'Language',
    'SCRIPT': 'Script',
    'RATING': 'Rating',

    // Musical metadata
    'KEY': 'Key',
    'BPM': 'BeatsPerMinute',
    'MOOD': 'Mood',
    'LYRICS': 'Lyrics',
    'LYRICIST': 'Lyricist',
    'ARRANGER': 'Arranger',
    'AUTHOR': 'Author',
    'WRITER': 'Writer',
    'SUBTITLE': 'Subtitle',
    'MOVEMENT': 'Movement',
    'MOVEMENTNUMBER': 'MovementNumber',
    'MOVEMENTTOTAL': 'MovementTotal',

    // Release metadata
    'LABEL': 'Label',
    'LABELNO': 'LabelNumber',
    'OPUS': 'Opus',
    'SOURCE': 'Source',
    'RELEASETYPE': 'ReleaseType',
    'RELEASESTATUS': 'ReleaseStatus',
    'RELEASECOUNTRY': 'ReleaseCountry',
    'SCRIPT': 'Script',
    'MEDIA': 'Media',

    // URLs and identifiers
    'URL': 'URL',
    'WEBSITE': 'Website',
    'WOAS': 'Woas',
    'EMAIL': 'Email',
    'DISCID': 'DiscID',
    'ASIN': 'ASIN',
    'ISRC': 'ISRCNumber',
    'MUSICBRAINZ_ARTISTID': 'MusicBrainzArtistID',
    'MUSICBRAINZ_ALBUMID': 'MusicBrainzAlbumID',
    'MUSICBRAINZ_ALBUMARTISTID': 'MusicBrainzAlbumArtistID',
    'MUSICBRAINZ_RELEASEGROUPID': 'MusicBrainzReleaseGroupID',
    'MUSICBRAINZ_RELEASETRACKID': 'MusicBrainzReleaseTrackID',
    'MUSICBRAINZ_WORKID': 'MusicBrainzWorkID',

    // Sorting metadata
    'TITLESORT': 'TitleSort',
    'ARTISTSORT': 'ArtistSort',
    'ALBUMSORT': 'AlbumSort',
    'ALBUMARTISTSORT': 'AlbumArtistSort',
    'COMPOSERSORT': 'ComposerSort',

    // Radio and streaming metadata
    'RADIO': 'Radio',
    'RADIOSTATION': 'RadioStation',
    'RADIOOWNER': 'RadioOwner',
    'PODCAST': 'Podcast',
    'PODCASTURL': 'PodcastURL',
    'EPISODE': 'Episode',
    'EPISODETYPE': 'EpisodeType',
    'SEASON': 'Season'
}

const ID3v2_FRAMES = {
    AENC: 'AudioEncryption',
    APIC: {
        name: 'Picture',
        subframes: {
            'APIC-1': 'PictureMIMEType',
            'APIC-2': 'PictureType',
            'APIC-3': 'PictureDescription'
        }
    },
    COMM: 'Comment',
    COMR: 'Commercial',
    ENCR: 'EncryptionMethod',
    GEOB: {
        name: 'GeneralEncapsulatedObject',
        subframes: {
            'GEOB-Mime': 'MIMEType',
            'GEOB-File': 'Filename',
            'GEOB-Desc': 'Description',
            'GEOB-Data': 'Data'
        }
    },
    GRID: 'GroupIdentification',
    LINK: 'LinkedInformation',
    MCDI: 'MusicCDIdentifier',
    MLLT: 'MPEGLocationLookupTable',
    OWNE: 'Ownership',
    PRIV: 'Private',
    PCNT: 'PlayCounter',
    POPM: 'Popularimeter',
    POSS: 'PostSynchronization',
    RBUF: 'RecommendedBufferSize',
    RVAD: 'RelativeVolumeAdjustment',
    RVRB: 'Reverb',
    SYLT: 'SyncLyrics',
    SYTC: 'SynchronizedTempoCodes',
    TALB: 'Album',
    TBPM: 'BeatsPerMinute',
    TCOM: 'Composer',
    TCON: 'Genre',
    TCOP: 'Copyright',
    TDAT: 'Date',
    TDLY: 'PlaylistDelay',
    TENC: 'EncodedBy',
    TEXT: 'Lyricist',
    TFLT: 'FileType',
    TIME: 'Time',
    TIT1: 'Grouping',
    TIT2: 'Title',
    TIT3: 'Subtitle',
    TKEY: 'InitialKey',
    TLAN: 'Language',
    TLEN: 'Length',
    TMED: 'MediaType',
    TOAL: 'OriginalAlbum',
    TOFN: 'OriginalFilename',
    TOLY: 'OriginalLyricist',
    TOPE: 'OriginalArtist',
    TORY: 'OriginalReleaseYear',
    TOWN: 'FileOwner',
    TPE1: 'Artist',
    TPE2: 'Band',
    TPE3: 'Conductor',
    TPE4: 'InterpretedBy',
    TPOS: 'PartOfSet',
    TPUB: 'Publisher',
    TRCK: 'Track',
    TRDA: 'RecordingDates',
    TRSN: 'InternetRadioStationName',
    TRSO: 'InternetRadioStationOwner',
    TSIZ: 'Size',
    TSRC: 'ISRC',
    TSSE: 'EncoderSettings',
    TYER: 'Year',
    TXXX: 'UserDefinedText',
    UFID: 'UniqueFileIdentifier',
    USER: 'TermsOfUse',
    USLT: 'Lyrics',
    WCOM: 'CommercialURL',
    WCOP: 'CopyrightURL',
    WOAF: 'FileURL',
    WOAR: 'ArtistURL',
    WOAS: 'SourceURL',
    WORS: 'InternetRadioStationURL',
    WPAY: 'PaymentURL',
    WPUB: 'PublisherURL',
    WXXX: 'UserDefinedURL'
};

const ID3v2_2_FRAMES = {
    BUF: 'RecommendedBufferSize',
    CNT: 'PlayCounter',
    COM: 'Comment',
    CRA: 'AudioEncryption',
    CRM: 'EncryptedMetaFrame',
    ETC: 'EventTimingCodes',
    EQU: 'Equalization',
    GEO: 'GeneralEncapsulatedObject',
    IPL: 'InvolvedPeople',
    LNK: 'LinkedInformation',
    MCI: 'MusicCDIdentifier',
    MLL: 'MPEGLocationLookupTable',
    PIC: 'Picture',
    POP: 'Popularimeter',
    REV: 'Reverb',
    RVA: 'RelativeVolumeAdjustment',
    SLT: 'SyncLyrics',
    STC: 'SynchronizedTempoCodes',
    TAL: 'Album',
    TBP: 'BeatsPerMinute',
    TCM: 'Composer',
    TCO: 'Genre',
    TCR: 'Copyright',
    TDA: 'Date',
    TDY: 'PlaylistDelay',
    TEN: 'EncodedBy',
    TFT: 'FileType',
    TIM: 'Time',
    TKE: 'InitialKey',
    TLA: 'Language',
    TLE: 'Length',
    TMT: 'MediaType',
    TOA: 'OriginalArtist',
    TOF: 'OriginalFilename',
    TOL: 'OriginalLyricist',
    TOR: 'OriginalReleaseYear',
    TOT: 'OriginalAlbum',
    TP1: 'Artist',
    TP2: 'Band',
    TP3: 'Conductor',
    TP4: 'InterpretedBy',
    TPA: 'PartOfSet',
    TPB: 'Publisher',
    TRC: 'ISRC',
    TRD: 'RecordingDates',
    TRK: 'Track',
    TSI: 'Size',
    TSS: 'EncoderSettings',
    TT1: 'Grouping',
    TT2: 'Title',
    TT3: 'Subtitle',
    TXT: 'Lyricist',
    TXX: 'UserDefinedText',
    TYE: 'Year',
    UFI: 'UniqueFileIdentifier',
    ULT: 'Lyrics',
    WAF: 'FileURL',
    WAR: 'ArtistURL',
    WAS: 'SourceURL',
    WCM: 'CommercialURL',
    WCP: 'CopyrightURL',
    WPB: 'PublisherURL',
    WXX: 'UserDefinedURL'
};

const PICTURE_TYPES = {
    0x00: 'Other',
    0x01: '32x32 PNG Icon',
    0x02: 'Other Icon',
    0x03: 'Front Cover',
    0x04: 'Back Cover',
    0x05: 'Leaflet',
    0x06: 'Media',
    0x07: 'Lead Artist',
    0x08: 'Artist',
    0x09: 'Conductor',
    0x0A: 'Band',
    0x0B: 'Composer',
    0x0C: 'Lyricist',
    0x0D: 'Recording Studio or Location',
    0x0E: 'Recording Session',
    0x0F: 'Performance',
    0x10: 'Capture from Movie or Video',
    0x11: 'Bright(ly) Colored Fish',
    0x12: 'Illustration',
    0x13: 'Band Logo',
    0x14: 'Publisher Logo'
};

const SYNCED_LYRICS_TYPES = {
    0x00: 'Other',
    0x01: 'Lyrics',
    0x02: 'Text Transcription',
    0x03: 'Movement/Part Name',
    0x04: 'Events',
    0x05: 'Chord',
    0x06: 'Trivia/Pop-up Information',
    0x07: 'Web Page URL',
    0x08: 'Image URL'
};

const UI = {
    dropZone: document.getElementById('dropZone'),
    fileInput: document.getElementById('fileInput'),
    output: document.getElementById('output'),
    copyBtn: document.getElementById('copyBtn'),
    katbinBtn: document.getElementById('katbinBtn'),

    updateDropZone(file = null) {
        const dropZone = this.dropZone;

        if (!dropZone.querySelector('.initial-content')) {
            const initialContent = document.createElement('div');
            initialContent.className = 'initial-content';
            initialContent.innerHTML = `
                <p>Drop audio file here or click to select</p>
                <button class="btn-default">Select File</button>
            `;
            dropZone.appendChild(initialContent);
        }

        if (!dropZone.querySelector('.compact-content')) {
            const compactContent = document.createElement('div');
            compactContent.className = 'compact-content';
            compactContent.innerHTML = `
                <p class="file-name"></p>
                <button class="change-file-btn">Change File</button>
            `;
            dropZone.appendChild(compactContent);
        }

        if (file) {
            dropZone.classList.add('compact');
            dropZone.querySelector('.file-name').textContent = file.name;
        } else {
            dropZone.classList.remove('compact');
        }
    }
};

const Utils = {
    formatDuration(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    },

    formatSyncedTime(timestamp, format) {
        if (format === 1) { // Timestamp in MPEG frames
            return `[${timestamp}]`;
        } else if (format === 2) { // Timestamp in milliseconds
            const ms = timestamp;
            const seconds = Math.floor(ms / 1000);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const remainingMs = ms % 1000;
            return `[${minutes}:${String(remainingSeconds).padStart(2, '0')}.${String(remainingMs).padStart(3, '0')}]`;
        }
        return `[${timestamp}]`;
    },

    formatFileSize(bytes) {
        const units = ['B', 'KB', 'MB', 'GB'];
        let size = bytes;
        let unitIndex = 0;
        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }
        return size.toFixed(1) + ' ' + units[unitIndex];
    },

    unSyncSafe(value) {
        return ((value & 0x7f000000) >> 3) |
            ((value & 0x007f0000) >> 2) |
            ((value & 0x00007f00) >> 1) |
            (value & 0x0000007f);
    },

    decodeText(buffer, encoding, offset = 0) {
        let decoder;
        switch (encoding) {
            case 0:
                decoder = new TextDecoder('iso-8859-1');
                break;
            case 1:
            case 2:
                decoder = new TextDecoder('utf-16');
                break;
            case 3:
                decoder = new TextDecoder('utf-8');
                break;
            default:
                decoder = new TextDecoder('utf-8');
        }
        return decoder.decode(buffer).replace(/\0/g, '');
    },

    decodeString(data, encoding) {
        if (!data || !data.length) return '';

        let decoder;
        switch (encoding) {
            case 0:
                decoder = new TextDecoder('iso-8859-1');
                break;
            case 1:
            case 2:
                decoder = new TextDecoder('utf-16');
                break;
            case 3:
                decoder = new TextDecoder('utf-8');
                break;
            default:
                decoder = new TextDecoder('utf-8');
        }
        return decoder.decode(data).replace(/\0+$/, '');
    },

    findTerminator(array, encoding, start = 0) {
        if (encoding === 0 || encoding === 3) {
            for (let i = start; i < array.length; i++) {
                if (array[i] === 0) return i;
            }
        } else {
            for (let i = start; i < array.length - 1; i += 2) {
                if (array[i] === 0 && array[i + 1] === 0) return i;
            }
        }
        return array.length;
    },

    getFileMagic(view) {
        try {
            let magic = '';
            for (let i = 0; i < 4; i++) {
                magic += String.fromCharCode(view.getUint8(i));
            }
            return magic;
        } catch {
            return '';
        }
    },

    getFileType(file) {
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
    },

    getFrameSize(layer, bitrate, sampleRate, padding) {
        if (layer === '1') {
            return Math.floor(((12 * bitrate * 1000 / sampleRate) + padding) * 4);
        } else {
            return Math.floor(((144 * bitrate * 1000 / sampleRate) + padding));
        }
    },

    decodeGenre(value) {
        if (!value) return '';

        const parenthesisRegex = /^\((\d+)\)$/;
        const refinedRegex = /\((\d+)\)/g;

        const singleMatch = value.match(parenthesisRegex);
        if (singleMatch) {
            const genreNum = parseInt(singleMatch[1]);
            return ID3v1_GENRES[genreNum] || `Unknown (${genreNum})`;
        }

        let processedValue = value;

        processedValue = processedValue.replace(refinedRegex, (match, num) => {
            const genreNum = parseInt(num);
            return ID3v1_GENRES[genreNum] || `Unknown (${genreNum})`;
        });

        if (/^\d+$/.test(processedValue)) {
            const genreNum = parseInt(processedValue);
            return ID3v1_GENRES[genreNum] || `Unknown (${genreNum})`;
        }

        if (processedValue.includes('/')) {
            return processedValue.split('/')
                .map(genre => {
                    if (/^\d+$/.test(genre)) {
                        const genreNum = parseInt(genre);
                        return ID3v1_GENRES[genreNum] || `Unknown (${genreNum})`;
                    }
                    return genre;
                })
                .filter(Boolean)
                .join('/');
        }

        return processedValue;
    },

    getGenreID(name) {
        return ID3v1_GENRES.findIndex(genre =>
            genre.toLowerCase() === name.toLowerCase());
    },

    isValidGenre(genre) {
        if (!genre) return false;
        if (/^\d+$/.test(genre)) {
            const num = parseInt(genre);
            return num >= 0 && num < ID3v1_GENRES.length;
        }
        return ID3v1_GENRES.some(g =>
            g.toLowerCase() === genre.toLowerCase());
    },

    readNullTerminated(data, offset, encoding) {
        let terminator;
        let i = offset;
        let terminatorLength;

        switch (encoding) {
            case 0: // ISO-8859-1
            case 3: // UTF-8
                terminatorLength = 1;
                // Find single null byte
                while (i < data.length) {
                    if (data[i] === 0) {
                        break;
                    }
                    i++;
                }
                break;

            case 1: // UTF-16 with BOM
            case 2: // UTF-16BE
                terminatorLength = 2;
                // Find two null bytes
                while (i < data.length - 1) {
                    if (data[i] === 0 && data[i + 1] === 0) {
                        break;
                    }
                    i += 2;
                }
                break;

            default:
                throw new Error(`Unknown encoding: ${encoding}`);
        }

        // Return the string data without the terminator
        return data.slice(offset, i);
    },

    splitNullTerminated(data, encoding) {
        const chunks = [];
        let start = 0;

        if (encoding === 1 || encoding === 2) {
            for (let i = 0; i < data.length - 1; i += 2) {
                if (data[i] === 0 && data[i + 1] === 0) {
                    chunks.push(data.slice(start, i));
                    start = i + 2;
                }
            }
        } else { // Single byte encodings
            for (let i = 0; i < data.length; i++) {
                if (data[i] === 0) {
                    chunks.push(data.slice(start, i));
                    start = i + 1;
                }
            }
        }

        if (start < data.length) {
            chunks.push(data.slice(start));
        }

        return chunks;
    },

    parseAPICFrame(data, isID3v2_2) {
        const encoding = data[0];
        let offset = 1;
        let mimeType = '';

        if (isID3v2_2) {
            mimeType = String.fromCharCode(data[1], data[2], data[3]);
            offset = 4;
        } else {
            while (data[offset] !== 0 && offset < data.length) {
                mimeType += String.fromCharCode(data[offset]);
                offset++;
            }
            offset++;
        }

        const pictureType = data[offset];
        offset++;

        let descriptionEnd;
        if (encoding === 1 || encoding === 2) {
            descriptionEnd = offset;
            while (descriptionEnd < data.length - 1) {
                if (data[descriptionEnd] === 0 && data[descriptionEnd + 1] === 0) {
                    break;
                }
                descriptionEnd += 2;
            }
        } else {
            descriptionEnd = offset;
            while (descriptionEnd < data.length && data[descriptionEnd] !== 0) {
                descriptionEnd++;
            }
        }

        const description = Utils.decodeString(
            data.slice(offset, descriptionEnd),
            encoding
        );

        offset = descriptionEnd + (encoding === 1 || encoding === 2 ? 2 : 1);

        const pictureData = data.slice(offset);

        return {
            mimeType,
            pictureType: PICTURE_TYPES[pictureType] || 'Unknown',
            description,
            size: pictureData.length,
            data: pictureData
        };
    },

    parseLyrics(data, isUnsynchronizedLyrics = true) {
        const encoding = data[0];
        let offset = 1;

        const language = String.fromCharCode(
            data[offset],
            data[offset + 1],
            data[offset + 2]
        );
        offset += 3;

        // Get content descriptor
        let descriptorEnd;
        if (encoding === 1 || encoding === 2) { // UTF-16
            descriptorEnd = offset;
            while (descriptorEnd < data.length - 1) {
                if (data[descriptorEnd] === 0 && data[descriptorEnd + 1] === 0) {
                    break;
                }
                descriptorEnd += 2;
            }
        } else {
            descriptorEnd = offset;
            while (descriptorEnd < data.length && data[descriptorEnd] !== 0) {
                descriptorEnd++;
            }
        }

        const descriptor = Utils.decodeString(
            data.slice(offset, descriptorEnd),
            encoding
        );

        // Skip descriptor terminator
        offset = descriptorEnd + (encoding === 1 || encoding === 2 ? 2 : 1);

        // Get lyrics text
        const lyrics = Utils.decodeString(
            data.slice(offset),
            encoding
        );

        return {
            language,
            descriptor,
            lyrics
        };
    },

    // Parse synchronized lyrics
    parseSyncLyrics(data) {
        const encoding = data[0];
        let offset = 1;

        // Get language (3 bytes)
        const language = String.fromCharCode(
            data[offset],
            data[offset + 1],
            data[offset + 2]
        );
        offset += 3;

        // Get time stamp format
        const timeStampFormat = data[offset];
        offset++;

        // Get content type
        const contentType = data[offset];
        offset++;

        // Get content descriptor
        let descriptorEnd;
        if (encoding === 1 || encoding === 2) {
            descriptorEnd = offset;
            while (descriptorEnd < data.length - 1) {
                if (data[descriptorEnd] === 0 && data[descriptorEnd + 1] === 0) {
                    break;
                }
                descriptorEnd += 2;
            }
        } else {
            descriptorEnd = offset;
            while (descriptorEnd < data.length && data[descriptorEnd] !== 0) {
                descriptorEnd++;
            }
        }

        const descriptor = Utils.decodeString(
            data.slice(offset, descriptorEnd),
            encoding
        );

        // Skip descriptor terminator
        offset = descriptorEnd + (encoding === 1 || encoding === 2 ? 2 : 1);

        // Parse synchronized lyrics entries
        const syncedLyrics = [];
        while (offset < data.length) {
            // Read time stamp (4 bytes)
            const timeStamp = (data[offset] << 24) |
                (data[offset + 1] << 16) |
                (data[offset + 2] << 8) |
                data[offset + 3];
            offset += 4;

            // Find end of text
            let textEnd;
            if (encoding === 1 || encoding === 2) {
                textEnd = offset;
                while (textEnd < data.length - 1) {
                    if (data[textEnd] === 0 && data[textEnd + 1] === 0) {
                        break;
                    }
                    textEnd += 2;
                }
            } else {
                textEnd = offset;
                while (textEnd < data.length && data[textEnd] !== 0) {
                    textEnd++;
                }
            }

            const text = Utils.decodeString(
                data.slice(offset, textEnd),
                encoding
            );

            syncedLyrics.push({
                timeStamp,
                text
            });

            // Skip text terminator
            offset = textEnd + (encoding === 1 || encoding === 2 ? 2 : 1);
        }

        return {
            language,
            timeStampFormat,
            contentType: SYNCED_LYRICS_TYPES[contentType] || 'Unknown',
            descriptor,
            syncedLyrics
        };
    }
};

const Parsers = {
    async parseWAV(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        const data = {};

        let offset = 12;
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
    },

    async parseOGG(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        const data = {};

        const decodeText = (buffer, start, length) => {
            return new TextDecoder().decode(new Uint8Array(buffer.slice(start, start + length)));
        };

        const magic = String.fromCharCode(
            view.getUint8(0),
            view.getUint8(1),
            view.getUint8(2),
            view.getUint8(3)
        );

        if (magic !== 'OggS') {
            throw new Error('Invalid OGG signature');
        }

        let offset = 0;
        let pageSize = 0;

        const version = view.getUint8(4);
        const headerType = view.getUint8(5);
        const granulePosition = view.getBigInt64(6, true);
        const streamSerial = view.getUint32(14, true);
        const pageSequence = view.getUint32(18, true);
        const checksum = view.getUint32(22, true);
        const pageSegments = view.getUint8(26);

        offset = 27;
        let totalLength = 0;
        for (let i = 0; i < pageSegments; i++) {
            totalLength += view.getUint8(offset + i);
        }

        offset += pageSegments;

        if (view.getUint8(offset + 1) === 0x76 &&
            view.getUint8(offset + 2) === 0x6f &&
            view.getUint8(offset + 3) === 0x72 &&
            view.getUint8(offset + 4) === 0x62 &&
            view.getUint8(offset + 5) === 0x69 &&
            view.getUint8(offset + 6) === 0x73) {

            data['VorbisVersion'] = view.getUint32(offset + 7, true);
            data['AudioChannels'] = view.getUint8(offset + 11);
            data['SampleRate'] = view.getUint32(offset + 12, true) + ' Hz';
            data['BitRateMaximum'] = view.getInt32(offset + 16, true) + ' bps';
            data['BitRateNominal'] = view.getInt32(offset + 20, true) + ' bps';
            data['BitRateMinimum'] = view.getInt32(offset + 24, true) + ' bps';

            let pos = offset + totalLength;
            while (pos < arrayBuffer.byteLength - 7) {
                if (view.getUint8(pos) === 0x03 &&
                    view.getUint8(pos + 1) === 0x76 &&
                    view.getUint8(pos + 2) === 0x6f) {

                    pos += 7;
                    const vendorLength = view.getUint32(pos, true);
                    pos += 4;

                    if (vendorLength > 0 && pos + vendorLength <= arrayBuffer.byteLength) {
                        data['Vendor'] = decodeText(arrayBuffer, pos, vendorLength);

                        pos += vendorLength;
                        const commentListLength = view.getUint32(pos, true);
                        pos += 4;

                        for (let i = 0; i < commentListLength && pos < arrayBuffer.byteLength; i++) {
                            const commentLength = view.getUint32(pos, true);
                            pos += 4;

                            if (pos + commentLength <= arrayBuffer.byteLength) {
                                const comment = decodeText(arrayBuffer, pos, commentLength);
                                const [key, ...valueParts] = comment.split('=');
                                const value = valueParts.join('=');

                                // Skip METADATA_BLOCK_PICTURE
                                const upperKey = key.toUpperCase();
                                if (upperKey !== 'METADATA_BLOCK_PICTURE') {
                                    const mappedKey = VORBIS_COMMENT_KEYS[upperKey] || key;
                                    if (value) {
                                        data[mappedKey] = value;
                                    }
                                }

                                pos += commentLength;
                            }
                        }
                        break;
                    }
                }
                pos++;
            }
        }

        return data;
    },

    async parseFLAC(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        const data = {};

        const signature = String.fromCharCode(
            view.getUint8(0),
            view.getUint8(1),
            view.getUint8(2),
            view.getUint8(3)
        );

        if (signature !== 'fLaC') {
            throw new Error('Invalid FLAC signature');
        }

        let offset = 4;
        while (offset < arrayBuffer.byteLength) {
            const blockHeader = view.getUint8(offset);
            const isLast = (blockHeader & 0x80) !== 0;
            const blockType = blockHeader & 0x7F;

            const blockSize = (view.getUint8(offset + 1) << 16) |
                (view.getUint8(offset + 2) << 8) |
                view.getUint8(offset + 3);

            offset += 4;

            switch (blockType) {
                case 0:
                    if (!data.STREAMINFO) data.STREAMINFO = {};

                    data.STREAMINFO = {
                        'BlockSizeMin': view.getUint16(offset, false),
                        'BlockSizeMax': view.getUint16(offset + 2, false),
                        'FrameSizeMin': (view.getUint8(offset + 4) << 16) |
                            (view.getUint8(offset + 5) << 8) |
                            view.getUint8(offset + 6),
                        'FrameSizeMax': (view.getUint8(offset + 7) << 16) |
                            (view.getUint8(offset + 8) << 8) |
                            view.getUint8(offset + 9),
                        'SampleRate': ((view.getUint8(offset + 10) << 12) |
                            (view.getUint8(offset + 11) << 4) |
                            (view.getUint8(offset + 12) >> 4)),
                        'Channels': ((view.getUint8(offset + 12) >> 1) & 0x7) + 1,
                        'BitsPerSample': (((view.getUint8(offset + 12) & 1) << 4) |
                            (view.getUint8(offset + 13) >> 4)) + 1,
                        'TotalSamples': ((BigInt(view.getUint8(offset + 13) & 0xF) << 32n) |
                            BigInt(view.getUint8(offset + 14) << 24) |
                            BigInt(view.getUint8(offset + 15) << 16) |
                            BigInt(view.getUint8(offset + 16) << 8) |
                            BigInt(view.getUint8(offset + 17))).toString(),
                        'MD5Signature': Array.from(
                            new Uint8Array(arrayBuffer.slice(offset + 18, offset + 34))
                        ).map(b => b.toString(16).padStart(2, '0')).join('')
                    };
                    break;

                case 4:
                    if (!data.VORBISCOMMENT) data.VORBISCOMMENT = {};

                    let pos = offset;
                    const vendorLength = view.getUint32(pos, true);
                    pos += 4;

                    const vendorString = new TextDecoder().decode(
                        new Uint8Array(arrayBuffer.slice(pos, pos + vendorLength))
                    );
                    data.VORBISCOMMENT['Vendor'] = vendorString;
                    pos += vendorLength;

                    const commentListLength = view.getUint32(pos, true);
                    pos += 4;

                    for (let i = 0; i < commentListLength && pos < offset + blockSize; i++) {
                        const commentLength = view.getUint32(pos, true);
                        pos += 4;

                        if (pos + commentLength <= offset + blockSize) {
                            const commentString = new TextDecoder().decode(
                                new Uint8Array(arrayBuffer.slice(pos, pos + commentLength))
                            );
                            pos += commentLength;

                            const [key, ...valueParts] = commentString.split('=');
                            const value = valueParts.join('=');

                            const mappedKey = VORBIS_COMMENT_KEYS[key.toUpperCase()];
                            if (value) {
                                if (mappedKey != null) {
                                    data.VORBISCOMMENT[mappedKey] = value;
                                } else {
                                    data.VORBISCOMMENT[key] = value;
                                }
                            }
                        }
                    }
                    break;
            }

            offset += blockSize;
            if (isLast) break;
        }

        return data;
    },

    async parseID3v2(arrayBuffer) {
        const view = new DataView(arrayBuffer);
        const data = {};

        // Check for ID3v2 header
        if (String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2)) !== 'ID3') {
            return data;
        }

        const version = view.getUint8(3);
        const revision = view.getUint8(4);
        const flags = view.getUint8(5);
        let size = Utils.unSyncSafe(view.getUint32(6));

        data.Version = `2.${version}.${revision}`;
        data.Flags = flags;
        data.Size = size;

        let offset = 10;
        const isID3v22 = version === 2;
        const frameHeaderSize = isID3v22 ? 6 : 10;

        // Get appropriate frame mapping table
        const frameTable = isID3v22 ? ID3v2_2_FRAMES : ID3v2_FRAMES;

        // Handle extended header if present (ID3v2.3+)
        if (version >= 3 && (flags & 0x40)) {
            const extHeaderSize = version === 4 ?
                Utils.unSyncSafe(view.getUint32(offset)) :
                view.getUint32(offset);
            offset += extHeaderSize;
        }

        // Main frame parsing loop
        while (offset < size + 10) {
            // Read frame header
            let frameID, frameSize, frameFlags;

            if (isID3v22) {
                // ID3v2.2 frame header
                frameID = String.fromCharCode(
                    view.getUint8(offset),
                    view.getUint8(offset + 1),
                    view.getUint8(offset + 2)
                );
                frameSize = (view.getUint8(offset + 3) << 16) |
                    (view.getUint8(offset + 4) << 8) |
                    view.getUint8(offset + 5);
                offset += 6;
            } else {
                // ID3v2.3/2.4 frame header
                frameID = String.fromCharCode(
                    view.getUint8(offset),
                    view.getUint8(offset + 1),
                    view.getUint8(offset + 2),
                    view.getUint8(offset + 3)
                );
                frameSize = version === 4 ?
                    Utils.unSyncSafe(view.getUint32(offset + 4)) :
                    view.getUint32(offset + 4);
                frameFlags = view.getUint16(offset + 8);
                offset += 10;
            }

            // Break if we hit padding or invalid frame
            if (frameID === '\0\0\0' || frameID === '\0\0\0\0') break;
            if (!frameSize || offset + frameSize > size + 10) break;

            // Get frame content
            const frameContent = new Uint8Array(arrayBuffer.slice(offset, offset + frameSize));

            // Skip encrypted frames
            if (frameFlags && (frameFlags & 0x0004)) {
                offset += frameSize;
                continue;
            }

            // Handle unsynchronization at frame level (ID3v2.4)
            let processedContent = frameContent;
            if (version === 4 && frameFlags && (frameFlags & 0x0002)) {
                processedContent = new Uint8Array(frameSize);
                let writePos = 0;
                for (let i = 0; i < frameContent.length; i++) {
                    processedContent[writePos++] = frameContent[i];
                    if (frameContent[i] === 0xFF && frameContent[i + 1] === 0x00) {
                        i++;
                    }
                }
            }

            // Process frame based on type
            try {
                switch (true) {
                    // Text frames
                    case frameID[0] === 'T' && frameID !== 'TXXX': {
                        if (!processedContent.length) break;
                        const encoding = processedContent[0];
                        const text = Utils.decodeString(processedContent.slice(1), encoding);

                        // Special handling for specific frame IDs
                        let key;
                        switch (frameID) {
                            case 'TDRC':
                            case 'TYER':
                                key = 'Year';
                                break;
                            case 'TRCK':
                                key = 'Track';
                                break;
                            default:
                                key = frameTable[frameID] || frameID;
                        }

                        data[key] = text;
                        break;
                    }

                    // URL frames
                    case frameID[0] === 'W' && frameID !== 'WXXX': {
                        const url = Utils.decodeString(processedContent, 0); // Always ISO-8859-1
                        data[frameTable[frameID]] = url;
                        break;
                    }

                    // User-defined URL (WXXX)
                    case frameID === 'WXXX': {
                        if (!processedContent.length) break;
                        const encoding = processedContent[0];
                        let parts = Utils.splitNullTerminated(processedContent.slice(1), encoding);
                        if (parts.length >= 2) {
                            const description = Utils.decodeString(parts[0], encoding);
                            const url = Utils.decodeString(parts[1], 0); // URL always ISO-8859-1
                            data[`UserDefinedURL-${description}`] = url;
                        }
                        break;
                    }

                    // Comments (COMM)
                    case frameID === 'COMM' || frameID === 'COM': {
                        if (processedContent.length < 4) break;
                        const encoding = processedContent[0];
                        const language = String.fromCharCode(
                            processedContent[1],
                            processedContent[2],
                            processedContent[3]
                        );
                        let textParts = Utils.splitNullTerminated(processedContent.slice(4), encoding);
                        if (textParts.length >= 2) {
                            const text = Utils.decodeString(textParts[1], encoding);
                            data.Comment = text;  // Just store the comment text directly
                        }
                        break;
                    }

                    // Unsynchronized lyrics handling
                    case frameID === 'USLT' || frameID === 'ULT': {
                        if (processedContent.length < 4) break;
                        const encoding = processedContent[0];
                        const language = String.fromCharCode(
                            processedContent[1],
                            processedContent[2],
                            processedContent[3]
                        ).toLowerCase();

                        let textParts = Utils.splitNullTerminated(processedContent.slice(4), encoding);
                        if (textParts.length >= 2) {
                            const lyrics = Utils.decodeString(textParts[1], encoding)
                                .split('\n')
                                .map(line => line.trim())
                                .filter(line => line)  // Remove empty lines
                                .join('\n');

                            data[`Lyrics-${language}`] = lyrics;
                        }
                        break;
                    }

                    // Synchronized lyrics (SYLT/SLT)
                    case frameID === 'SYLT' || frameID === 'SLT': {
                        if (processedContent.length < 6) break;
                        const encoding = processedContent[0];
                        const language = String.fromCharCode(
                            processedContent[1],
                            processedContent[2],
                            processedContent[3]
                        ).toLowerCase();
                        const timeStampFormat = processedContent[4];

                        let pos = 6;
                        // Skip descriptor
                        const descriptor = Utils.readNullTerminated(processedContent, pos, encoding);
                        pos += descriptor.length + (encoding === 1 || encoding === 2 ? 2 : 1);

                        const syncedLines = [];
                        while (pos < processedContent.length - 4) {
                            const timeStamp = (processedContent[pos] << 24) |
                                (processedContent[pos + 1] << 16) |
                                (processedContent[pos + 2] << 8) |
                                processedContent[pos + 3];
                            pos += 4;

                            const text = Utils.readNullTerminated(processedContent, pos, encoding);
                            pos += text.length + (encoding === 1 || encoding === 2 ? 2 : 1);

                            if (text.length) {
                                const formattedTime = Utils.formatSyncedTime(timeStamp, timeStampFormat);
                                const decodedText = Utils.decodeString(text, encoding).trim();
                                if (decodedText) {
                                    syncedLines.push(`${formattedTime} ${decodedText}`);
                                }
                            }
                        }

                        if (syncedLines.length) {
                            data[`SyncedLyrics-${language}`] = syncedLines.join('\n');
                        }
                        break;
                    }

                    // Attached pictures (APIC/PIC)
                    case frameID === 'APIC' || frameID === 'PIC': {
                        if (processedContent.length < 4) break;
                        const encoding = processedContent[0];
                        let pos = 1;

                        let mimeType;
                        if (frameID === 'PIC') {
                            mimeType = String.fromCharCode(
                                processedContent[1],
                                processedContent[2],
                                processedContent[3]
                            ).toLowerCase();
                            if (mimeType === 'jpg') mimeType = 'image/jpeg';
                            else if (mimeType === 'png') mimeType = 'image/png';
                            pos = 4;
                        } else {
                            const mimeBytes = [];
                            while (pos < processedContent.length && processedContent[pos] !== 0) {
                                mimeBytes.push(processedContent[pos]);
                                pos++;
                            }
                            mimeType = String.fromCharCode(...mimeBytes);
                            pos++; // Skip null terminator
                        }

                        const pictureType = processedContent[pos];
                        pos++;

                        // Skip description and move to picture data
                        const description = Utils.readNullTerminated(processedContent, pos, encoding);
                        pos += description.length + (encoding === 1 || encoding === 2 ? 2 : 1);

                        const pictureData = processedContent.slice(pos);

                        const picTypeText = PICTURE_TYPES[pictureType] || 'Other';
                        data[`Picture (${picTypeText})`] = `${mimeType}, ${Utils.formatFileSize(pictureData.length)}`;
                        break;
                    }

                    // Private frames (PRIV)
                    case frameID === 'PRIV': {
                        let pos = 0;
                        const ownerBytes = [];
                        while (pos < processedContent.length && processedContent[pos] !== 0) {
                            ownerBytes.push(processedContent[pos]);
                            pos++;
                        }
                        const owner = String.fromCharCode(...ownerBytes);
                        pos++; // Skip null terminator

                        const privateData = processedContent.slice(pos);
                        data[`Private-${owner}`] = privateData;
                        break;
                    }

                    // Play counter (PCNT)
                    case frameID === 'PCNT' || frameID === 'CNT': {
                        let counter = 0;
                        for (let i = 0; i < processedContent.length; i++) {
                            counter = (counter << 8) | processedContent[i];
                        }
                        data.PlayCounter = counter;
                        break;
                    }

                    // Popularimeter (POPM)
                    case frameID === 'POPM' || frameID === 'POP': {
                        let pos = 0;
                        const emailBytes = [];
                        while (pos < processedContent.length && processedContent[pos] !== 0) {
                            emailBytes.push(processedContent[pos]);
                            pos++;
                        }
                        const email = String.fromCharCode(...emailBytes);
                        pos++; // Skip null terminator

                        const rating = processedContent[pos];
                        pos++;

                        let counter = 0;
                        while (pos < processedContent.length) {
                            counter = (counter << 8) | processedContent[pos];
                            pos++;
                        }

                        data.Popularimeter = {
                            email,
                            rating,
                            counter
                        };
                        break;
                    }
                }
            } catch (error) {
                console.warn(`Error parsing frame ${frameID}:`, error);
            }

            offset += frameSize;
        }

        return data;
    },

    async parseMPEG(arrayBuffer) {
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

                const versionBits = (header >> 19) & 3;
                const versions = ['2.5', 'reserved', '2', '1'];
                data['MPEGAudioVersion'] = versions[versionBits];

                const layerBits = (header >> 17) & 3;
                const layers = ['reserved', '3', '2', '1'];
                data['AudioLayer'] = layers[layerBits];

                data['ProtectionBit'] = ((header >> 16) & 1) ? 'Not Protected' : 'Protected';

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

                data['PaddingBit'] = ((header >> 9) & 1) ? 'Padded' : 'Not Padded';
                data['PrivateBit'] = ((header >> 8) & 1) ? 'Set' : 'Not Set';

                const channelMode = (header >> 6) & 3;
                const modes = ['Stereo', 'Joint Stereo', 'Dual Channel', 'Single Channel'];
                data['ChannelMode'] = modes[channelMode];

                if (channelMode === 1) {
                    const modeExt = (header >> 4) & 3;
                    data['MSStereo'] = (modeExt & 2) ? 'On' : 'Off';
                    data['IntensityStereo'] = (modeExt & 1) ? 'On' : 'Off';
                    data['JointStereoBands'] = ((modeExt & 0x0F) + 1) * 4;
                }

                data['CopyrightFlag'] = ((header >> 3) & 1) ? 'True' : 'False';
                data['OriginalMedia'] = ((header >> 2) & 1) ? 'True' : 'False';

                const emphasis = header & 3;
                const emphasisTypes = ['None', '50/15 ms', 'Reserved', 'CCIT J.17'];
                data['Emphasis'] = emphasisTypes[emphasis];

                const paddingSize = ((header >> 9) & 1) ? 1 : 0;
                const frameSize = Utils.getFrameSize(layer, bitrates[version][layer][bitrateIndex],
                    sampleRates[ver][sampleRateIndex], paddingSize);
                data['FrameSize'] = frameSize + ' bytes';

                break;
            }
            offset++;
        }

        return data;
    },

    async parseID3v1(arrayBuffer) {
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
};

const Formatter = {
    formatOutput(metadata) {
        let output = '';
        const sections = {
            'File': metadata.File,
            'ID3v2': metadata.ID3v2,
            'FLAC': metadata.FLAC?.STREAMINFO,
            'Vorbis': metadata.FLAC?.VORBISCOMMENT,
            'MPEG': metadata.MPEG,
            'ID3v1': metadata.ID3v1,
            'WAV': metadata.WAV,
            'OGG': metadata.OGG,
        };

        for (const [section, data] of Object.entries(sections)) {
            if (data && Object.keys(data).length > 0) {
                output += `---- ${section} ----\n`;
                // Sort keys for consistent output order
                const sortedKeys = Object.keys(data).sort((a, b) => {
                    const priority = {
                        'Version': 1,
                        'Flags': 2,
                        'Size': 3,
                        'Title': 4,
                        'Artist': 5,
                        'Album': 6
                    };
                    const priorityA = priority[a] || 100;
                    const priorityB = priority[b] || 100;
                    if (priorityA !== priorityB) {
                        return priorityA - priorityB;
                    }
                    return a.localeCompare(b);
                });

                for (const key of sortedKeys) {
                    const value = data[key];
                    if (value !== undefined && value !== null && value !== '') {
                        if (typeof value === 'string' && value.includes('\n')) {
                            // Handle multi-line values with proper indentation
                            const lines = value.split('\n');
                            output += `${key.padEnd(30)}: ${lines[0]}\n`;
                            for (let i = 1; i < lines.length; i++) {
                                if (lines[i].trim()) {
                                    output += `${' '.repeat(30)}  ${lines[i]}\n`;
                                }
                            }
                        } else {
                            output += `${key.padEnd(30)}: ${value}\n`;
                        }
                    }
                }
                output += '\n';
            }
        }
        return output;
    }
};

const FileProcessor = {
    async processFile(file) {
        if (!file) return;

        try {
            UI.updateDropZone(file);

            const metadata = {
                'File': {
                    'FileName': file.name,
                    'FileSize': Utils.formatFileSize(file.size),
                    'FileType': Utils.getFileType(file),
                    'MIMEType': file.type,
                    'FileModifyDate': new Date(file.lastModified).toISOString()
                }
            };

            const arrayBuffer = await file.arrayBuffer();
            const view = new DataView(arrayBuffer);
            const magic = Utils.getFileMagic(view);

            if (magic.startsWith('ID3')) {
                const id3v2 = await Parsers.parseID3v2(arrayBuffer);
                if (Object.keys(id3v2).length > 0) {
                    metadata['ID3v2'] = id3v2;
                }

                const mpegInfo = await Parsers.parseMPEG(arrayBuffer);
                if (Object.keys(mpegInfo).length > 0) {
                    metadata['MPEG'] = mpegInfo;
                }

                const id3v1 = await Parsers.parseID3v1(arrayBuffer);
                if (id3v1) {
                    metadata['ID3v1'] = id3v1;
                }
            } else if (magic.startsWith('RIFF')) {
                metadata['WAV'] = await Parsers.parseWAV(arrayBuffer);
            } else if (magic.startsWith('OggS')) {
                metadata['OGG'] = await Parsers.parseOGG(arrayBuffer);
            } else if (magic.startsWith('fLaC')) {
                metadata['FLAC'] = await Parsers.parseFLAC(arrayBuffer);
            }

            UI.output.textContent = Formatter.formatOutput(metadata);
        } catch (error) {
            console.error('Error:', error);
            UI.output.textContent = `Error processing file: ${error.message}\n${error.stack}`;
        }
    }
};

const EventHandlers = {
    handleDrop(e) {
        const file = e.dataTransfer.files[0];
        if (file) FileProcessor.processFile(file);
    },

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) FileProcessor.processFile(file);
    },

    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
};

const ButtonHandlers = {
    async handleCopyClick() {
        try {
            await navigator.clipboard.writeText(UI.output.textContent);
            UI.copyBtn.textContent = 'Copied!';
            UI.copyBtn.classList.add('success');
            setTimeout(() => {
                UI.copyBtn.textContent = 'Copy';
                UI.copyBtn.classList.remove('success');
            }, 2000);
        } catch (err) {
            UI.copyBtn.textContent = 'Error!';
            UI.copyBtn.classList.add('error');
            setTimeout(() => {
                UI.copyBtn.textContent = 'Copy';
                UI.copyBtn.classList.remove('error');
            }, 2000);
        }
    },

    async handleKatbinClick() {
        try {
            UI.katbinBtn.textContent = 'Copying...';
            const response = await fetch('https://katb.in/api/paste', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    paste: {
                        content: UI.output.textContent
                    }
                })
            });
            const data = await response.json();
            await navigator.clipboard.writeText(`https://katb.in/${data.id}`);
            UI.katbinBtn.textContent = 'Copied URL!';
            UI.katbinBtn.classList.add('success');
        } catch (err) {
            UI.katbinBtn.textContent = 'Error!';
            UI.katbinBtn.classList.add('error');
        } finally {
            setTimeout(() => {
                UI.katbinBtn.textContent = 'Copy to Katbin';
                UI.katbinBtn.classList.remove('success', 'error');
            }, 2000);
        }
    }
};

function initializeEventListeners() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.addEventListener(eventName, EventHandlers.preventDefaults, false);
        UI.dropZone.addEventListener(eventName, EventHandlers.preventDefaults, false);
    });

    document.addEventListener('dragenter', () => UI.dropZone.classList.add('highlight'), false);
    document.addEventListener('dragover', () => UI.dropZone.classList.add('highlight'), false);
    document.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null || !document.contains(e.relatedTarget)) {
            UI.dropZone.classList.remove('highlight');
        }
    }, false);
    document.addEventListener('drop', (e) => {
        UI.dropZone.classList.remove('highlight');
        EventHandlers.handleDrop(e);
    });
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('change-file-btn')) {
            UI.fileInput.click();
        }
    });

    UI.dropZone.addEventListener('dragenter', () => UI.dropZone.classList.add('highlight'), false);
    UI.dropZone.addEventListener('dragover', () => UI.dropZone.classList.add('highlight'), false);
    UI.dropZone.addEventListener('dragleave', () => UI.dropZone.classList.remove('highlight'), false);
    UI.dropZone.addEventListener('drop', (e) => {
        UI.dropZone.classList.remove('highlight');
        EventHandlers.handleDrop(e);
    });

    UI.dropZone.addEventListener('click', () => UI.fileInput.click());
    UI.fileInput.addEventListener('change', EventHandlers.handleFileSelect);

    UI.copyBtn.addEventListener('click', ButtonHandlers.handleCopyClick);
    UI.katbinBtn.addEventListener('click', ButtonHandlers.handleKatbinClick);

    UI.updateDropZone();
}

initializeEventListeners();