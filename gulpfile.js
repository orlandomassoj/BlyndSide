var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

// Compile SASS

gulp.task('sass', function() {
    return gulp.src('./app/sass/*.sass', './app/sass/pages/*.sass') // Create a stream in the directory where our Sass files are located.
    .pipe(sourcemaps.init())        //init sourcemap
    .pipe(sass())                    // Compile Sass into style.css.
    .pipe(autoprefixer({            //autoprefix
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())                //minify css
    .pipe(sourcemaps.write('./'))     //create sourcemap
    .pipe(gulp.dest('./app/sass/style.css'));      // Write style.css to the project's root directory.

});

/**
 * Watch the root directory for changes.
 */

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }

  });

  gulp.watch('./app/sass/pages/*.sass', ['sass']).on('change', browserSync.reload);  // If a file changes, re-run 'sass'
  gulp.watch('./app/sass/*.sass', ['sass']).on('change', browserSync.reload);
  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/js/functions.js', function() {
    browserSync.reload();
  });

});
