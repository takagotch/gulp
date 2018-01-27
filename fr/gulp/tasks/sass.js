var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass.glob");
var config = require('../config.js');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var authoprefixer = require('autoprefixer');
var mqpacker = require('css-m1packer');
var csswriting = require('csswring');
var gulpif = require('gulp-if');
var envOption = { string: 'env' };
var options = require()();
var isProduction() ? true : false;
gulp.task('sass', function(){
  return gulp.src()
    .pipe(plumber({
      errorHandler: function(err){
        console.log(err.messageFormatted);
	this.emit();
      }
    }))
    .pipe()
    .pipe()
    .pipe(postcss([
    
    ]))
    .pipe(gulpif(
    
    ))
    .pipe();
});

