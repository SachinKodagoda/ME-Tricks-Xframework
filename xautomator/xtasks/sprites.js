var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename'),
  del = require('del');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './xautomator/xtemp/spriteTemplate.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./xautomator/xtemp/sprites', './xoutput/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./xoutput/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./xautomator/xtemp/sprites/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./xautomator/xtemp/sprites/css/**/*.svg')
    .pipe(gulp.dest('./xoutput/images/sprites/'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./xautomator/xtemp/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./xinput/xcss/xmodules/xsprite'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./xautomator/xtemp/sprites');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
