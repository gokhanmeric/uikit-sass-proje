// taximpro creative

var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// start web server
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
    	defaultFile: 'index.html',
      livereload: true,
      open: false
    }));
});

// sass derleme
gulp.task('sass', function () {
  gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// deafult taks to run all other tasks
gulp.task('default', ['sass', 'sass:watch', 'webserver']);
