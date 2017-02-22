var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('concatenation', function() {
   return gulp.src(['src/frontend/scripts/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('src/frontend/')); 
});

// runs concatenation for js files and AFTER this reloads the browser
gulp.task('js-watch', ['concatenation'], browserSync.reload);

gulp.task('default', function() {
    // launch a server
    browserSync.init({
       server: {
           baseDir: "./src/frontend/"
       }
   });  
    
   gulp.watch('src/frontend/scripts/**/*.js', ['js-watch']);
   gulp.watch('src/frontend/**/*.html', browserSync.reload);
   gulp.watch('src/frontend/**/*.css', browserSync.reload);
});


