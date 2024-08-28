const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		fallback: {
			path: require.resolve("path-browserify"),
			url: require.resolve("url/"),
			zlib: require.resolve("browserify-zlib"),
			querystring: require.resolve("querystring-es3"),
			fs: false, // No fs module in the browser
			stream: require.resolve("stream-browserify"),
			os: require.resolve("os-browserify/browser"),
			crypto: require.resolve("crypto-browserify"),
			http: require.resolve("stream-http"),
			net: false, // No net module in the browser
			buffer: require.resolve("buffer/"),
			util: require.resolve("util/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
