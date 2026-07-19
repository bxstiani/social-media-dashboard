const { src, dest, watch, series } = require('gulp');
const sassCompiler = require('gulp-sass')(require('sass'));

// Define the Sass compilation task
function compileSass() {
  return src('app/scss/**/*.scss') // Source path for your Sass files
    .pipe(sassCompiler().on('error', sassCompiler.logError)) // Compile and log errors
    .pipe(dest('dist')); // Output destination for compiled CSS
}

// Define the Watch task to automatically compile on save
function watchFiles() {
  watch('app/scss/**/*.scss', compileSass);
}

// Export tasks to make them accessible via terminal
exports.compileSass = compileSass;
exports.watch = series(compileSass, watchFiles);
exports.default = series(compileSass, watchFiles);
