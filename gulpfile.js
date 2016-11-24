var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('browserSync', ['sass'], function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

gulp.task('sass', function(){
  return gulp.src('./sass/**/*.scss')
    .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function(){
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('.js/**/*.js', browserSync.reload);
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['browserSync', 'watch']);
