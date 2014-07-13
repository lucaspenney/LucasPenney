module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			app: {
				src: ['app/modules/app.js', 'app/**/*.js', '!app/app.js', '!app/programs/**/*.js'], // source files mask
				dest: 'app/app.js', // destination folder
			}
		},
		watch: {
			scripts: {
				files: 'app/**/*.js',
				tasks: ['concat:app'],
			},
			css: {
				files: 'css/less/*',
				tasks: ['less:main']
			}
		},
		less: {
			main: {
				files: {
					"css/main.css": "css/less/main.less"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['concat']);

};