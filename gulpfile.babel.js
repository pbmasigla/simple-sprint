import gulp from "gulp";
import path from "path";
import webpack from "webpack";
import nodemon from "nodemon";
import del from "del";

let configs = require("./webpack.config");;

gulp.task("webpack-server", () => {
	return webpackServerDev();
});

function webpackServerDev() {
	const serverConfig = configs[1];
	let resolved = false;
	return new Promise((resolve, reject) => {
		webpack(serverConfig).watch(100, err => {
			// on first compiled resolve the gulp task
			if (!resolved) {
				return err ? reject(err) : resolve(true);
			}
			if (err) {
				return console.error(err);
			}
		});
	});
}

// Automatically restart the backend server after rebuild
gulp.task("dev-server", ["webpack-server"], () => {
	nodemon({
		execMap: {
			js: "node"
		},
		script: path.join(__dirname, "build", "index.js"),
		watch: [path.join(__dirname, "build", "index.js")]
	}).on("restart", () => {
		console.log("nodemon: restart");
	});
});

gulp.task("clean", () => del(["build/**/*"]));
gulp.task("clean-server", () => del(["build/*.js"]));
gulp.task("clean-client", () => del(["build/public/**/*"]));

gulp.task("default", ["clean", "dev-server"]);
