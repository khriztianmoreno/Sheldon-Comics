module.exports = function(grunt){
 
    // Project configuration.
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9000,
	        base: 'app/'
	      }
	    }
	  },
	  watch: {
	    project: {
	  	  files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.json', 'app/**/*.css'],
	      	options: {
	          livereload: true,
	          watchTask: true
	        }
	      }
	    }
	});

	//https://github.com/gruntjs/grunt-contrib-connect
    grunt.loadNpmTasks('grunt-contrib-connect');
    //https://github.com/gruntjs/grunt-contrib-watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
 
};