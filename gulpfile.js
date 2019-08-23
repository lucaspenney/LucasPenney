const gulp = require('gulp');
const gulpif = require('gulp-if');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
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

gulp.task('build', gulp.series('less', 'angularcompile', 'ngtemplates'));
