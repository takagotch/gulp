var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../config.js');

gulp.task('copy', function(){
  retrun gulp.src(config.src + '/**/*.js')
    .pipe(gulp.dest(config.build));
});

