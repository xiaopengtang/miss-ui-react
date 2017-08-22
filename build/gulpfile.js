const gulp = require("gulp")
const path = require("path")
const $ = require("gulp-load-plugins")()
const runSequence = require('run-sequence')
const minify = require("gulp-minify-css")
const pkg = require("../package.json")
const moment = require("moment")

const src = "../src/style/mu.scss"

let watchFiles = ["../src/style/**/*.scss"]

const destFile = "../dist/css"

const header = [
    "/*"
	,"* create by <%= author %>"
	,"* version:<%= version %>"
	,"* GIT:<%= homepage %>"
	,"* email:<%= email %>"
	,`* last update:${moment().format("YYYY-MM-DD hh:mm:ss")}`
	,"*/"
].join("\n")+"\n"

gulp.task("style" , () => {
	gulp.src(src)
	.pipe($.plumber({errorHandler:function(e){
        this.emit('end');
    }}))
	.pipe( $.sass() )
	.pipe( $.header(
		header
		,pkg
	) )
	.pipe( gulp.dest(destFile))
	.pipe( minify() )
	.pipe( $.rename({suffix: '.min',dirname:""}) )
	.pipe( $.header(
		header
		,pkg
	) )
	.pipe( gulp.dest(destFile) )
})

gulp.task("watch:style",() => {
	gulp.watch(watchFiles,["style"])
})

gulp.task("watch",cb => {
	return runSequence(["watch:style"],cb)
})


gulp.task("default",["style","watch"])
