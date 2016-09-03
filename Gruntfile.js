module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		copy: {
			main: {
				files: [
					{ expand: true, src: [ 'jquery.js' ], cwd: 'bower_components/jquery/dist', dest: 'app/public/js' },
					{ expand: true, src: [ '**' ], cwd: 'bower_components/bootstrap/dist', dest: 'app/public/' },
					{ expand: true, src: [ 'react.js', 'react-dom.js' ], cwd: 'bower_components/react', dest: 'app/public/js' },
				]
			}
		},
		watch: {
			grunt: {
				files: [ 'Gruntfile.js' ],
				tasks: 'watch'
			},
			app: {
				files: [ 'app/**' ],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'watch' ] );
}
