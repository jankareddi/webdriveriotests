module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    webdriver : {
      options : {
        desiredCapabilities: {
          browserName: 'chrome'
        }
      },

      all : {
        tests : ['*.js']
      },

      testArea : {
        tests : ['<%= fileName %>.js']
      }
    }
  });

  // load the webdriver plug-in for grunt
  grunt.loadNpmTasks('grunt-webdriver');

  // set up tasks
  grunt.registerTask('test', ['webdriver:all']);
  grunt.registerTask('testArea', function(testType) {
    grunt.config.set('fileName', this.args[0]);
    grunt.task.run('webdriver:testArea');
  });
  grunt.registerTask('default', ['test']);

};