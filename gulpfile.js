var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');

var paths = {
    styles: './site/styles/**/*.styl',
    scripts: './site/scripts/**/*.js',
    images: './site/img/**/*.*'
};

var dests = {
    styles: './site/build/styles',
    scripts: './site/build/scripts',
    images: './site/build/img'
};

gulp.task('styles', function () {
    gulp.src(paths.styles)
        .pipe(stylus())
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dests.styles))
        .pipe(minifyCss())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest(dests.styles));
});

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(gulp.dest(dests.scripts))
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dests.scripts));
});

gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(dests.images));
});

gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['watch']);
