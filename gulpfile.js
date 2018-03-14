const gulp = require('gulp');
const gulpif = require('gulp-if');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const ngTemplate = require('gulp-ng-templates');
const argv = require('yargs').argv;
const sourcemaps = require('gulp-sourcemaps');

gulp.task('less', (done) => {
	return gulp.src('./css/less/main.less')
		.pipe(less())
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulpif(argv.production, cssmin()))
		.pipe(gulp.dest('./css'));
});

gulp.task('angularcompile', (done) => {
	var appFiles = [
		'app/modules/app.js',
		'!app/templates.js',
		'app/**/*.js',
		'!app/app.js',
	];

	var dependencies = [
		'node_modules/angular/angular.js',
		'node_modules/angular-route/angular-route.js',
		'node_modules/angular-sanitize/angular-sanitize.js',
		'node_modules/angular-animate/angular-animate.js',
		'node_modules/angular-scroll/angular-scroll.js',
		'node_modules/angular-aria/angular-aria.js',
		'node_modules/angular-material/angular-material.js',
		'node_modules/bootstrap/dist/js/bootstrap.js',
		'node_modules/lodash/lodash.js',
		'node_modules/remarkable/dist/remarkable.js',
		'node_modules/three/three.js',
		'node_modules/lodash/lodash.js',
		'node_modules/ng-ripple/dist/js/ng-ripple.js',
		'app/app.js',
	];

	gulp.src(appFiles)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./app/'))
		.on('end', () => {
			gulp.src(dependencies)
				.pipe(gulpif(!argv.production, sourcemaps.init()))
				.pipe(replace('"use strict";', ''))
				.pipe(concat('app.js'))
				.pipe(gulpif(argv.production, uglify({
					mangle:false
				})))
				.pipe(gulpif(!argv.production, sourcemaps.write()))
				.pipe(gulp.dest('./app'))
				.on('end', () => {
					done();
				});
		});
});

gulp.task('ngtemplates', (done) => {
	return gulp.src('./app/views/**/*.html')
		.pipe(ngTemplate({
			filename: 'templates.js',
			moduleName: 'app',
			filepath: 'templates.js',
		}))
		.on('error', (err) => {
			console.log(err.message);
		})
		.pipe(gulp.dest('./app/'));
});

gulp.task('build', gulp.series('less', 'angularcompile', 'ngtemplates'));
