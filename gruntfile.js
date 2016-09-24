module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
          src: 'src/js/*.js',
          dest: 'dist/js/build.js'
        }
      },

    uglify: {
      dist: {
        files: {
          'dist/js/build.min.js': ['dist/js/build.js']
        }
      }
    },
    cssmin: {
     combine: {
	    files: {
	      'dist/css/main.min.css': ['src/css/*.css']
	    }
	  }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};