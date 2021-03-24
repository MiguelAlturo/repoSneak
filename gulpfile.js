var { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    inject = require('gulp-inject'),
    rename = require('gulp-rename');    
const rollup = require('gulp-better-rollup');
const babelRollup  = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');

function initBrowserSync(cb) {
    browserSync.init({
        port: 9000,
        server: {
            baseDir: 'dist'
        },
    })
    cb();
}

function setSass(cb) {
    src(['scss/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename('styles.min.css'))
        .pipe(dest('dist/css'))
        .pipe(dest('css'))
        .pipe(browserSync.stream());
    cb();
}

function setHtml(cb) {
    src('*.html')
        .pipe(inject(src(['index.html']), {
            starttag: '<!-- inject:index:{{ext}} -->',
            transform: function(filePath, file) {
                // return file contents as string
                return file.contents.toString('utf8')
            }
        }))
        .pipe(dest('dist'));
    cb();
}

function setImages(cb) {    
    src('images/logo/*')
        .pipe(dest('dist/images/logo'));
    cb();
}

function setJs(cb) {
    src(['scripts/**/*.js'])
        .pipe(rollup({ plugins: [babelRollup(), resolve(), commonjs(), json()] }, 'umd'))
        .pipe(dest('dist/scripts'))
        .pipe(dest('../dist/scripts'))
        .pipe(browserSync.stream());;
    cb();
}

function setData(cb) {
    src('scripts/data/**/*.json')
        .pipe(dest('dist/scripts/data'))
    cb();
}

function reloadFiles(cb) {
    watch('*.html').on('change', browserSync.reload);
    watch('scss/**/*.scss', setSass);
    watch('scss/**/*.scss').on('change', browserSync.reload);
    watch('scripts/**', browserSync.reload);
    cb();
}

exports.default = series(setSass, initBrowserSync, setHtml,setImages,setData ,setJs,reloadFiles);