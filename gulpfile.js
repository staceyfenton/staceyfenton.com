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

gulp.task('default', ['browserSync', 'sass', 'scripts', 'nunjucksRender'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  gulp.watch('src/js/**/*.js', ['scripts']); 
  gulp.watch('src/views/**/*.njk', ['nunjucksRender']); 
});

gulp.task('dist', ['sass-dist', 'scripts', 'nunjucksRender'], function(cb) {
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
  return gulp.src('src/views/pages/**/*.njk')
    .pipe(data(function() {
      return require('./src/views/data/work.json') // /staceyfenton.github.io/src/views/data/work.json
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

gulp.task('scripts', function() {
  return browserify({
    entries: ['./src/js/main.js']
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
});