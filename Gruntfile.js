module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                optional: ["runtime"],
            },
            dist: {
                src: '**/*.js',
                dest: 'dist/',
                expand: true,
                cwd: 'src/',
            },
        },
        eslint: {
            dist: 'src'
        },
        watch: {
            dist: {
                files: ['Gruntfile.js', 'package.json', '.eslintrc', 'src/**/*.js'],
                tasks: ['build'],
            }
        }
    });

    grunt.registerTask('build', ['eslint', 'babel']);
    grunt.registerTask('default', ['build']);
};