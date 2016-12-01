var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('default', function() {
  console.log("Is this the real life?");
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("styles/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src(['./aishaexamples.js', './gulpfile.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});
