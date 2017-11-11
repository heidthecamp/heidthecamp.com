'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass');

gulp.task('default', ['sass'], function(){
});

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'))
});

gulp.task('sass:watch', function (){
  gulp.watch('./scss/**/*.scss', ['sass'])
})