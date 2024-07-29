const { src, dest, series, watch } = require("gulp");


const compileToCss = require('gulp-sass')(require("sass"))




function buildStyles() {
  return  src("./scss/**/*.scss").pipe(compileToCss()).pipe(dest("css"));
}


function watcher() {
  watch("./scss/**/*.scss", buildStyles)
}


exports.default = series(buildStyles, watcher) 