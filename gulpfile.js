const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

function styles() {
    return src("src/css/style.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(dest("dist"));
}

function scripts(){
    return browserify('src/scripts/script.js')
        .transform(babelify.configure({
        presets: ["@babel/preset-env"],
      })
      )
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(dest("dist"));
}

function sentinel() {
    watch("src/css/**/*.scss", { ignoreInitial: false }, styles);
    watch("src/scripts/**/*.js", scripts);
}

exports.sentinel = sentinel;
