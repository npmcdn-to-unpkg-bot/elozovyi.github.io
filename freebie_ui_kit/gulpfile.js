
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber');
    // rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
    rename = require("gulp-rename");

var path = {

    build: { // paths to build
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
    },

    src: { // paths to source files
        html: 'src/*.html',
        js: 'src/js/*.js',
        scss: 'src/scss/app.scss',
        img: 'src/img/**/*.*',
    },

    watch: { // paths to modify files
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        scss: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
    },

    clean: './build'
};

var sassPaths = [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src',
    'bower_components/fa-scss-plus'
];

var config = {
    server: {
        baseDir: "./build",
        index: "index.html"
    },
    //tunnel: 'port_framework_v1',
    host: 'localhost',
    port: 9000,
    logPrefix: "port_framework"
};

gulp.task('webserver', function () { // <- init localserver
    browserSync.init(config);
});

gulp.task('clean', function (cb) { // <- clear
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () { // <- task to build html
     gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () { // <- task to build js
     gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('scss:build', function () { // <- task to build scss
     gulp.src(path.src.scss)
        .pipe(plumber())
            .pipe(sourcemaps.init())
        .pipe(sass({
        	includePaths: sassPaths
        }))
        .pipe(prefixer({
        	browsers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('images:build', function () { // <- task to build images
    gulp.src(path.src.img)
       .pipe(imagemin({
           progressive: true,
           svgoPlugins: [{removeViewBox: false}],
           use: [pngquant()],
           interlaced: true
       }))
       .pipe(gulp.dest(path.build.img))
       .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'scss:build',
    'images:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.scss], function(event, cb) {
        gulp.start('scss:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
       gulp.start('images:build');
    });
});


gulp.task('default', ['build', 'watch', 'webserver']);
