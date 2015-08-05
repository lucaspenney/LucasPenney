module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			app: {
				src: ['app/modules/app.js', 'app/controllers/*.js', 'app/**/*.js', '!app/app.js'],
				dest: 'app/app.js', // destination folder
			}
		},
		ngtemplates: {
			app: {
				src: 'app/views/**/*.html',
				dest: 'app/templates.js',
				options: {
					url: function(url) {
						return '/' + url;
					}
				}
			},
		},
		watch: {
			scripts: {
				files: ['app/**/*.js', '!app/app.js'],
				tasks: ['concat:app'],
			},
			css: {
				files: 'css/less/*',
				tasks: ['less:development']
			}
		},
		uglify: {
			production: {
				options: {
					mangle: false,
				},
				files: {
					'app/app.js': [
						'bower_components/angular/angular.js',
						'bower_components/angular-route/angular-route.js',
						'bower_components/angular-sanitize/angular-sanitize.js',
						'bower_components/angular-animate/angular-animate.js',
						'bower_components/angular-scroll/angular-scroll.js',
						'bower_components/angular-material/angular-material.js',
						'bower_components/bootstrap/dist/js/bootstrap.js',
						'bower_components/lodash/dist/lodash.js',
						'bower_components/remarkable/dist/remarkable.js',
						'bower_components/threejs/build/three.js',
						'bower_components/lodash/lodash.js',
						'app/app.js',
					]
				},
			}
		},
		replace: {
			production: {
				src: ['app/app.js'],
				dest: 'app/app.js',
				replacements: [{
					from: '"use strict";',
					to: ""
				}, {
					from: "'use strict';",
					to: ""
				}]
			}
		},
		less: {
			development: {
				files: {
					"css/main.css": "css/less/main.less"
				}
			},
			production: {
				files: {
					"css/main.css": "css/less/main.less"
				},
				compress: true,
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-angular-templates');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build-dev', ['concat:app', 'ngtemplates:app', 'less:development']);
	grunt.registerTask('build-prod', ['concat:app', 'uglify:production', 'replace:production', 'ngtemplates:app', 'less:production']);

};