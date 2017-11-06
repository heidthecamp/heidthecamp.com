'use strict';

var gulp      = require('gulp'),
    compass   = require('gulp-compass'),
    sass      = require('gulp-sass'),
    path      = require('path');

gulp.task('build',['styles'])

gulp.task('default', ['styles'], function(){
  gulp.start('build')
  //return gulp.watch('static/scss/**/*.scss', ['styles'])
});

gulp.task('styles', function() {
  return gulp.src('./static/scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'static/css',
      sass: 'static/scss',
      image: 'static/images'
    }))
    .pipe(gulp.dest('static/css'))
});
