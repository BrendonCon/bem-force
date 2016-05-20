
var gulp = require('gulp'), 
  loadPlugins = require('gulp-load-plugins'),
  plugins = loadPlugins(),
  cssPath = './css/',
  sassPath = './src/sass/*.sass',
  scssPath = './src/scss/*.scss',
  exampleSassPath = './example/*.sass',
  exampleScssPath = './example/*.scss';
    
gulp.task('scss', function() {
  return gulp.src(exampleSassPath)
    .pipe(plugins.sass({outputStyle: 'expanded'})    
    .on('error', plugins.sass.logError))
    .pipe(plugins.stripCssComments())
    .pipe(gulp.dest(cssPath));
});

gulp.task('sass', function() {
  return gulp.src(exampleScssPath)
    .pipe(plugins.sass({outputStyle: 'expanded'})
    .on('error', plugins.sass.logError))
    .pipe(gulp.dest(cssPath));
});

gulp.task('build:scss', function() {
  return gulp.src(scssPath)
    .pipe(plugins.concat('_bemForce.scss'))
    .pipe(plugins.stripCssComments())
    .pipe(gulp.dest('./build/scss/'));
});

gulp.task('build:sass', function() {
  return gulp.src(sassPath)
    .pipe(plugins.concat('_bemForce.sass'))
    .pipe(gulp.dest('./build/sass/'));
});

gulp.task('watch:scss', function() {
  gulp.watch(exampleScssPath, ['example']);
});

gulp.task('watch:sass', function() {
  gulp.watch(exampleSassPath, ['example']);
});

gulp.task('example', ['scss', 'sass']);

gulp.task('build', ['build:sass', 'build:scss']);

gulp.task('watch', ['watch:scss', 'watch:sass']);

gulp.task('default', ['build:scss', 'build:sass', 'example']);