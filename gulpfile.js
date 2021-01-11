const gulp = require("gulp");
const less = require("gulp-less");
const spawn = require("child_process").spawn;
const fse = require("fs-extra");

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const ffd20lnrw_LESS = ["less/*.less"];
const ffd20lnrw_MODULE = ["module/**/*.js", "webpack.config.js", "ffd20lnrw.js"];
function compileLESS() {
  return gulp.src("less/ffd20lnrw.less").pipe(less()).pipe(gulp.dest("./"));
}
function compileJS() {
  return new Promise((resolve) => {
    let proc = spawn("npm", ["run", "build:release"], { shell: true });

    proc.on("close", () => {
      resolve();
    });
  });
}
async function cleanDist() {
  try {
    await fse.remove("./dist");
    await fse.mkdirp("./dist");
  } catch (e) {
    console.error(e);
  }
}
const css = gulp.series(compileLESS);
const js = gulp.series(cleanDist, compileJS);

/* ----------------------------------------- */
/*  Watch Updates
/* ----------------------------------------- */

function watchUpdates() {
  gulp.watch(ffd20lnrw_LESS, css);
  // gulp.watch(ffd20lnrw_MODULE, js);
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.default = gulp.series(
  gulp.parallel(css),
  // gulp.parallel(js),
  watchUpdates
);
exports.css = css;
