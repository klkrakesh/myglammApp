
var gulp=require('gulp'),
    watch = require('gulp-watch'),
    uglify=require('gulp-uglify'),
    minify=require('gulp-minify'),
    browserSync = require('browser-sync').create();



gulp.task('browserSync', function() {
  browserSync.init({
  	port:8089,
  	startPath: '/bookings',
    server: {
      baseDir: 'app',
      routes: {
        '/bookings': 'app'
      }
    },
    
    });
});


gulp.task('uglify',function(){
return gulp.src('app/*.js')
.pipe(uglify())
.pipe(gulp.dest('dist'))
.pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('minify',function(){
return gulp.src('app/*.css')
.pipe(minify())
.pipe(gulp.dest('dist'))
.pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync'], function (){
  
 gulp.watch('app/*.html', browserSync.reload); 
 gulp.watch('app/**/*.css', browserSync.reload); 
  gulp.watch('app/**/*.js', browserSync.reload); 
});


gulp.task('default',['uglify','minify','watch','browserSync']);

