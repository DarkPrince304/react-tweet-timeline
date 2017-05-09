var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './test/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'ReactTweetTimeline.js'
	},
	module: {
		rules: [
		{ test: /\.jsx$/, use: 'babel-loader' },
		{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'test/index.html'
	})]
}