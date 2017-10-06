var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "xoutput"
    }
  });

  watch('./xoutput/index.html', function() {
    browserSync.reload();
  });

  watch('./xinput/xcss/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./xoutput/styles/style.css')
    .pipe(browserSync.stream());
});
