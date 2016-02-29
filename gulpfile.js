
var gulp = require('gulp'), 
  loadPlugins = require('gulp-load-plugins'),
  plugins = loadPlugins(),
  bemForceFiles = [
    './scss/BEMForce/_config.scss',
    './scss/BEMForce/_function.scss',
    './scss/BEMForce/_mixin.scss'
  ];
    
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {
  return gulp.src(bemForceFiles)
    .pipe(plugins.concat('_bemForce.scss'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});
    