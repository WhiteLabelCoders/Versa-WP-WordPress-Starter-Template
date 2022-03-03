'use strict';

/*
 * Variables
 * Change this settings to start
 */

// Localhost page url address
var url_address = 'http://wlc-starter-demo:8888/';


// Environments directories names
var env_development = 'app',
	env_production = 'dist';

// Requirements
var gulp = require('gulp');

// SCSS
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// Images
var imagemin = require('gulp-imagemin');
var cwebp = require('gulp-cwebp');

// JavaScripts
var terser = require('gulp-terser');

// Utilities
var browserSync = require('browser-sync').create();
var fileSync = require('gulp-file-sync');


/*
 * SCSS Compiler Development
 */
gulp.task('sass-development', function () {
	return gulp.src('./' + env_development + '/scss/**/*.scss')
	.pipe( sourcemaps.init({
		largeFile: true
	}))
	.pipe(
		sass({
			errorLogToConsole: true
		})
		.on('error', console.error.bind(console))
	)
	.pipe(
		sourcemaps.write('./')
	)
    .pipe(
		gulp.dest('./' + env_development + '/css')
	);
});


/*
 * SCSS Compiler Production
 */
gulp.task('sass-production', function () {
	return gulp.src('./' + env_development + '/scss/**/*.scss')
	.pipe( sass({
		outputStyle: 'compressed'
	}) )
	.pipe(
		autoprefixer({
			cascade: false
		})
	)
	.pipe(
		gulp.dest('./' + env_production + '/css')
	)
	.pipe(
		browserSync.stream()
	)
});


/*
 * SVG
 * Docs: https://github.com/svg/svgo#what-it-can-do
 */
gulp.task('svg', function () {
	return gulp.src('./' + env_development + '/svg/**/*.svg')
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: true}
				]
			})
		]))
        .pipe(
			gulp.dest('./' + env_production + '/svg')
		);
});


/*
 * Image optimization
 * Docs: https://www.npmjs.com/package/gulp-image
 */
gulp.task('image', function () {
	return gulp.src('./' + env_development + '/img/**/*.{png,gif}')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5})
		]))
        .pipe(
			gulp.dest('./' + env_production + '/img')
		);
});


/*
 * WEBP image conversion
 * Docs: https://www.npmjs.com/package/gulp-webp
 */
gulp.task('webp', function () {
    return gulp.src('./' + env_development + '/img/**/*.jpg')
		.pipe(cwebp())
		.pipe(
			gulp.dest('./' + env_production + '/img')
		);
});


/*
 * JS minify
 * Docs: https://www.npmjs.com/package/gulp-uglify
 */
gulp.task('js', function () {
	return gulp.src('./' + env_development + '/js/**/*.js')
		.pipe(terser())
		.pipe(
			gulp.dest('./' + env_production + '/js')
		);
});


/*
 * Gulp wathch
 */
gulp.task('watch', function () {
	browserSync.init({
		proxy: url_address
	});
	gulp.watch('./' + env_development + '/scss/**/*.scss', gulp.series('sass-development', 'sass-production'));
	gulp.watch('./' + env_development + '/svg/**/*.svg', gulp.task('svg'));
	gulp.watch('./' + env_development + '/img/*.{png,gif}', gulp.task('image'));
	gulp.watch('./' + env_development + '/img/**/*.jpg', gulp.task('webp'));
	gulp.watch('./' + env_development + '/js/**/*.js', gulp.task('js'));
	gulp.watch('./**/*.{html,php}', browserSync.reload);
	gulp.watch('./' + env_development + '/**/*.*', function() {
		fileSync('./' + env_development, './' + env_production, {
			verbose: true,
			updateAndDelete: true,
			recursive: true
		});
  	});
});