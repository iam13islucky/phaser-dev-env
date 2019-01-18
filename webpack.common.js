const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
  		rules: [
    		{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader" 
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				exclude: /node_modules/,
				use: [
					'file-loader'
				]
			}
  		]
	},
	plugins:[
		new CleanWebpackPlugin(['dist'])
	]
}