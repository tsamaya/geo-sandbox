module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      specFiles: {
        options: {
          timeout: 10000
        },
        src: ['spec/**/*.js']
      }
    },
    watch: {
      options: {
        interrupt: true,
        spawn: false,
        reload: true
      },
      configFiles: {
        files: ['Gruntfile.js','config.json', 'local.config.json'],
        tasks: ['test'],
      },
      specFiles: {
        files: ['spec/**/*.js'],
        tasks: ['test']
      },
      sourceFiles: {
        files: ['lib/**/*.js'],
        tasks: ['test']
      }
    }
  });
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['test']);
};
