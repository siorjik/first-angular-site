var gulp = require("gulp");
var less = require("gulp-less");
var autoPrefix = require("gulp-autoprefixer");

gulp.task("lessTask", function() {
	return gulp.src("app/styles/less/style.less").pipe(autoPrefix('last 15 versions', {cascade: false})).pipe(less()).pipe(gulp.dest("app/styles/css"));
});

gulp.task("watch", function() {
	gulp.watch("app/styles/less/style.less", ["lessTask"]);
});