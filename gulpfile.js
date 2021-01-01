const gulp = require("gulp");
const less = require("gulp-less");
const spawn = require("child_process").spawn;
const fse = require("fs-extra");

/* ----------------------------------------- */
/*  Compile LESS
/* ----------------------------------------- */

const PF1_LESS = ["less/*.less"];
const PF1_MODULE = ["module/**/*.js", "webpack.config.js", "pf1.js"];
function compileLESS() {
  return gulp.src("less/pf1.less").pipe(less()).pipe(gulp.dest("./"));
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
  gulp.watch(PF1_LESS, css);
  // gulp.watch(PF1_MODULE, js);
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
