var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'),
  hexrgba = require('postcss-hexrgba'),
  rename = require('gulp-rename'),
  lost = require('lost'),
  extend = require('postcss-extend'),
  conditionals = require('postcss-conditionals'),
  For = require('postcss-for'),
  each = require('postcss-each'),
  math = require('postcss-math');

gulp.task('styles', function() {
  var processors = [
    cssImport,
    each,
    For,    
    math,
    conditionals,
    mixins,
    cssvars,
    nested,
    hexrgba,
    extend,
    lost,
    autoprefixer
  ];
  return gulp.src('./xinput/xcss/xstyle.css')
    .pipe(postcss(processors))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./xoutput/styles'));
});
