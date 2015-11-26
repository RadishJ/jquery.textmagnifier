module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist/**', 'dist/*.*'],
        },
        copy: {
            js: {
                expand: true,
                cwd: 'js/',
                src: '**',
                dest: 'dist/js/'
            },
            jquery: {
                src: 'lib/jquery/jquery.js',
                dest: 'dist/js/jquery.js'
            },
            css: {
                expand: true,
                cwd: 'css/',
                src: '**',
                dest: 'dist/css/'
            }
        },
        uglify: {
            options: {
                footer:'\n/*! build time: <%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                expand: true,
                cwd: 'dist/js/',
                src: '*.js',
                dest: 'dist/js/',
                ext: '.min.js',
                extDot: 'last'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};
