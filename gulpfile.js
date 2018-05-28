'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('dashboard-menu', function () {
    gulp.src('./dashboard-menu/src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dashboard-menu/dist/style'));
});

gulp.task('watch', function () {
    gulp.watch('./dashboard-menu/src/style/**/*.scss', ['dashboard-menu']);
});
