module.exports = function(grunt) {
    grunt.initConfig({
        clean: ['dist'],
        concat: {
            dist: {
                src: [
                    'lib/reader.js',
                    'lib/dataview-extra.js',
                    'lib/genres.js',
                    'lib/id3frame.js',
                    'lib/id3tag.js',
                    'lib/exports.js'
                ],
                dest: 'dist/id3.js',
                options: {
                    banner: ";(function(){",
                    footer: "}( window ));"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['clean', 'concat']);
};
