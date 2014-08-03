'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('flythat.jquery.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        clean: {
            files: ['dist/*.js', 'dist/*.css']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            all: {
                src: [
                    'src/jquery.flythat.js',
                ],
                dest: 'dist/jquery.<%= pkg.name %>.js'
            },
            css: {
                src: [
                    'src/jquery.flythat.css',
                ],
                dest: 'dist/jquery.<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            all: {
                src: '<%= concat.all.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.min.js'
            }
        },
        replace: {
            dist: {
                options: {
                    variables: {
                        'VERSION': '<%= pkg.version %>',
                        'DATE': '<%= grunt.template.today("yyyy-mm-dd") %>'
                    },
                    prefix: '@'
                },
                files: [
                    {
                        'src': ['dist/*.js', 'dist/*.css'],
                        'dest': './'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', []);
    grunt.registerTask('dist', ['clean', 'concat', 'replace', 'uglify']);

};
