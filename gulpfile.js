// Dependencies
var gulp          = require( 'gulp' ),
    gulp_css_nano = require( 'gulp-cssnano' ),
    gulp_rename   = require( 'gulp-rename' ),
    gulp_concat   = require('gulp-concat'),
    gulp_uglify   =require('gulp-uglify');

// CSS task
gulp.task( 'css', function()
{
    return gulp.src( './src/css/style.css' )    // Get main CSS file
        .pipe( gulp_css_nano() )                // Minify it
        .pipe( gulp_rename( 'style.min.css' ) ) // Rename it
        .pipe( gulp.dest( './src/css/' ) );     // Put it in folder
} );

// JS task
gulp.task( 'js', function()
{
    return gulp.src( [                          // Get JS files (in order)
            './src/js/scriptdeux.js',
            './src/js/script.js'
        ] )
        .pipe( gulp_concat( 'script.min.js' ) ) // Concat in one file
        .pipe( gulp_uglify() )                  // Minify them
        .pipe( gulp.dest( './src/js/' ) );      // Put it in folder
} );

// Watch task
gulp.task( 'watch', function()
{
    // Watch for CSS modifications
    gulp.watch( './src/css/style.css', [ 'css' ] );

    // Watch for JS modifications (but not for script.min.js)
    gulp.watch( [ './src/js/**', '!./src/js/script.min.js' ], [ 'js' ] );
} );

gulp.task( 'default', [ 'css', 'js', 'watch' ] );