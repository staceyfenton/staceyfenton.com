require('es6-promise').polyfill();

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 2 versions', 'ie 10']
};
var critical = require('critical').stream;

gulp.task('default', ['browserSync', 'nunjucksRender', 'sass', 'scripts', 'images', 'fonts'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  gulp.watch('src/js/**/*.js', ['scripts']); 
  gulp.watch('src/views/**/*.njk', ['nunjucksRender']); 
  gulp.watch('src/img/**/*', ['images']); 
  gulp.watch('src/fonts/**/*', ['fonts']); 
});

gulp.task('dist', ['nunjucksRender', 'sass-dist', 'scripts', 'images', 'fonts', 'readme', 'manifest'], function(cb) {
  // minify js
  pump(
    [
      gulp.src('dist/assets/js/*.js'),
      uglify(),
      gulp.dest('dist/assets/js')
    ],
    cb
  );
});

/* ----- */ 

gulp.task('nunjucksRender', function() {
  return gulp.src(['src/views/index.njk', 'src/views/pages/**/*.njk'])
    .pipe(data(function() {
      return require('./src/views/data/work.json')
    }))
    .pipe(nunjucksRender({
      path: 'src/views/',
      ext: '.html',
      inheritExtension: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass-dist', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist/assets/css'))
});

gulp.task('critical', function () {
  return gulp.src('dist/**/*.html')
      .pipe(critical({
        base: 'dist/', 
        inline: true, 
        minify: true, 
        css: ['dist/assets/css/styles.css'],
        width: 1300,
        height: 900,
        extract: true
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return browserify({
    entries: ['./src/js/main.js']
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('readme', function() {
  return gulp.src('README.md')
    .pipe(gulp.dest('dist'));
});

gulp.task('manifest', function() {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});