var id3 = function(opts, cb) {
    /*
     * Initialise ID3
     */
    var options = {
        type: id3.OPEN_URI
    };
    if(typeof opts === 'string') {
        opts = {file: opts, type: id3.OPEN_URI};
    } else if(typeof window !== 'undefined' && window.File && opts instanceof window.File) {
        opts = {file: opts, type: id3.OPEN_FILE};
    }
    for(var k in opts) {
        options[k] = opts[k];
    }

    if(!options.file) {
        return cb(new Error('No file was set'));
    }

    if(options.type === id3.OPEN_FILE) {
        if(typeof window === 'undefined' || !window.File || !window.FileReader || typeof ArrayBuffer === 'undefined') {
            return cb(new Error('Browser does not have support for the File API and/or ArrayBuffers'));
        }
    } else if(options.type === id3.OPEN_LOCAL) {
        if(typeof require !== 'function') {
            return cb(new Error('Local paths may not be read within a browser'));
        }
    } else {
    }
}

id3.OPEN_FILE = Reader.OPEN_FILE;
id3.OPEN_URI = Reader.OPEN_URI;
id3.OPEN_LOCAL = Reader.OPEN_LOCAL;

if(typeof module !== 'undefined' && module.exports) {
    module.exports = id3;
} else {
    if(typeof define === 'function' && define.amd) {
        define('id3', [], function() {
            return id3;
        });
    } else {
        window.id3 = id3;
    }
}

