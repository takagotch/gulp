var gulp = require('gulp');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var dirs = {
	src: 'src',
	dest: 'dest',
};

gulp.task('coffee', function(){
gulp.src(dirs.src + '/coffee/*.coffee')
.pipe(coffee())
.pipe(gulp.dest(dirs.dest))
});

gulp.task('uglify', function(){
return gulp.src(dirs.dest)
.pipe(uglify())
.pipe(gulp.dest(dirs.dest));
});

gulp.task('build', ['coffee', 'uglify']);
gulp.task('watch', function(){
gulp.watch(dirs.src, ['build']);
});

