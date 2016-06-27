module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['js/src/*.js'],
        dest: 'js/build/script.main.js'
      },
      css: {
        src: ['css/src/*.css'],
        dest: 'css/build/styles.main.css'
      }
    },
    uglify: {
        js: {
          src: ['js/build/script.main.js'],
          dest: 'js/build/script.main.min.js'
        },
    }
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
