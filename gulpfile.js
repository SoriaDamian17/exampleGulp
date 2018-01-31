/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('js', function () {
  gulp.src('public/js/source/*.js')
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/js/build/'))
});

gulp.task('estaticos', ['js']);
