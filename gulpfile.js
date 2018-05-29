'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('dashboard-menu', function () {
    gulp.src('./dashboard-menu/src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dashboard-menu/dist/style'));
});

gulp.task('expenses-grid', function () {
    gulp.src('./expenses-grid/src/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./expenses-grid/dist/style'));
});

gulp.task('watch', function () {
    gulp.watch('./dashboard-menu/src/style/**/*.scss', ['dashboard-menu']);
    gulp.watch('./expenses-grid/src/style/**/*.scss', ['expenses-grid']);
});
