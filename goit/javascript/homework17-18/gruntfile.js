module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['js/*.js'],
        dest: 'js/script.main.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'css/styles.main.css'
      },
    }
});

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};
