'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
    gulp.task('deploy', function() {
        return gulp.src('./dist/**/*')
            .pipe($.ghPages({
                force: true
            }));
    });
};