module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ' '
            },
            dist: {
                src: ['directive.js','tmp/template.js'],
                dest: 'dist/directive.js'
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'dist/directive.min.js': ['dist/directive.js']
                }
            }
        },

        jshint: {
            files: ['directive.js']
        },
        serve: {
            options: {
                port: 9000
            }
        },
        html2js:{
            main:{
                src: ['template.html'],
                dest: 'tmp/template.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-serve');

//    grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('default', ['jshint','html2js', 'concat', 'uglify']);
};
