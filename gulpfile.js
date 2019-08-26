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
const eslint = require('gulp-eslint');
const bro = require('gulp-bro');
const babel = require('gulp-babel');

const lintFiles = [
	'src/**/*.js',
	'gulpfile.js',
];

const babelConfig = {
	compact: false,
	presets: ['@babel/react', '@babel/env'],
};

gulp.task('watch', (done) => {
	gulp.watch('./css/**/*.less', gulp.series('less'));
	gulp.watch('./src/**/*.js').on('change', (file) => {
		let path = file.substr(0, file.lastIndexOf("/"));
		gulp.src(file)
			.pipe(babel(babelConfig))
			.on('error', (err) => {
				console.log(err.message);
			})
			.pipe(gulp.dest("./.tmp/"))
			.on('end', () => {
				gulp.series('browserify')();
			});
	});
	gulp.watch(lintFiles).on('change', (path) => {
		var dir = "./" + path.substr(0, path.lastIndexOf('/') + 1);
		function isFixed(file) {
			var did = file.eslint != null && file.eslint.fixed;
			if (did) console.log("Fixing lint errors in " + path);
			return did;
		}
		gulp.src(path)
			.pipe(eslint({
				fix: true,
			}))
			.pipe(eslint.format())
			.pipe(gulpif(isFixed, gulp.dest(dir, {
				overwrite: true
			})));
	});
});

gulp.task('transpile', (done) => {
	return gulp.src('./src/**/*.js')
		.pipe(babel(babelConfig))
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulp.dest('./.tmp'));
});

gulp.task('browserify', (done) => {
	if (argv.production) process.env.NODE_ENV = "production";
	return gulp.src('./.tmp/app.js')
		.pipe(bro())
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulpif(argv.production, uglify()))
		.on('error', (err) => {
			console.log(err.message);
			done();
		})
		.pipe(gulp.dest('./build'));
});

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

gulp.task('build', gulp.series('less', 'transpile', 'browserify'));
