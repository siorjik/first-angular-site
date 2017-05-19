var gulp = require("gulp");
var less = require("gulp-less");
var autoPrefix = require("gulp-autoprefixer");

gulp.task("lessTask", function() {
	return gulp.src("app/less/style.less").pipe(autoPrefix('last 15 versions', {cascade: false})).pipe(less()).pipe(gulp.dest("app/css"));
});

gulp.task("watch", function() {
	gulp.watch("app/less/style.less", ["lessTask"]);
});