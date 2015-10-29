var path = require("path");
var koa = require("koa");
var bodyParser = require("koa-bodyparser");
var mount = require("koa-mount");
var serve = require("koa-static");

var app = koa();

var config = require("../webpack.config.js")[0];
var webpack = require("webpack");
var compiler = webpack(config);
app.use(require("koa-webpack-dev-middleware")(compiler, {
	noInfo: true
}));
app.use(require("koa-webpack-hot-middleware")(compiler));


// BodyParser must be required before requests are piped to api or request
// bodies will not be parsed and proxied to api
app.use(bodyParser());

app.use(require("./src/server/routes/routes"));


app.listen(3000);
console.log("App listening on %s", 3000);
console.log("Using %s collection", "Simple Sprint");
