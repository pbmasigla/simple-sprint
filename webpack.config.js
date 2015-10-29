var webpack = require("webpack");
var path = require("path");

var react = "react/dist/react.min.js";
var reactDom = "react-dom/dist/react-dom.min.js";

var clientConfig = {
	// The entrypoint must be kept in sync with the production version
	entry: [
		"./src/client/js/app.js",
		"webpack-hot-middleware/client?reload=true"
	],

	output: {
		// absolute path of build destination
		path: path.join(__dirname, "build", "public"),
		// filename of entry chunk
		filename: "js/app.js"
	},

	devtool: "cheap-module-source-map",

	resolve: {
		extensions: ["", ".js", ".less"],
		alias: {
			react$: path.join(__dirname, "node_modules", "react"),
			"react-dom$": path.join(__dirname, "node_modules", "react-dom")
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, "src", "client")
				],
				loader: "babel",
				query: 	{
					plugins: [
						"react-transform"
					],
					extra: {
						"react-transform": {
							transforms: [{
								transform: "react-transform-hmr",
								imports: ["react"],
								locals: ["module"]
							}]
						}
					}
				}
			},
			{
				test: /\.less$/,
				include: [
					path.join(__dirname, "src", "client", "less")
				],
				loaders: ["style", "css?sourceMap", "autoprefixer?browsers=last 2 version", "less?sourceMap=true"]
			},
			{
				test: /\.(ttf|eot|svg)(\?[0-9]*)?$/,
				loader: "file-loader"
			},
			{
				test: /\.jpg$/,
				loader: "url-loader?limit=10000"
			}
		],
		preLoaders: [{
			test: /\.js$/,
			loader: "eslint-loader",
			include: path.join(__dirname, "src", "client")
		}]
	},

	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
			ReactDOM: "react-dom"
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

var serverConfig = {
	entry: "./index.js",
	output: {
		path: path.join(__dirname, "build"),
		filename: "index.js",
		libraryTarget: "commonjs2"
	},

	devtool: "cheap-module-source-map",

	target: "node",
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
	},

	// all non-relative modules are external
	externals: [
		/^@?[a-z\-0-9\/]+$/,
		/webpack\.config/
	],

	resolve: {
		extensions: ["", ".js", ".ejs"]
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, "src", "server"),
					path.join(__dirname, "src", "client")
				],
				loader: "babel"
			},
			{
				test: /\.ejs$/,
				loader: "ejs-compiled-loader"
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
			ReactDOMServer: "react-dom/server",
			_: "underscore"
		}),
		// Inject the babel/polyfill to provide the regeneratorRuntime
		new webpack.BannerPlugin("require(\"babel/polyfill\");", {
			entryOnly: true,
			raw: true
		})
	]
};

module.exports = [clientConfig, serverConfig];
