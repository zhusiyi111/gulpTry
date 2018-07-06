const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');



del('./dist/lib');

gulp.src('./src/component/*/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/lib/component'))


gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});