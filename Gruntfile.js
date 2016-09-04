module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		bower: {
			install: {
				
			}
		},
		copy: {
			main: {
				files: [
					{ expand: true, src: [ 'jquery.js' ], cwd: 'bower_components/jquery/dist', dest: 'app/public/js' },
					{ expand: true, src: [ '**' ], cwd: 'bower_components/bootstrap/dist', dest: 'app/public/' },
					{ expand: true, src: [ 'react.js', 'react-dom.js' ], cwd: 'bower_components/react', dest: 'app/public/js' },
				]
			}
		},
		express: {
			dev: {
				options: {
					script: 'app/bin/www'
				}
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

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'bower', 'copy', 'express', 'watch' ] );
}
