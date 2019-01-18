const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MinifyPlugin = require("babel-minify-webpack-plugin")

mdule.exports = merge(common, {
	mode: 'production',
	plugins: [
		new MinifyPlugin(minifyOpts, pluginOpts)
	]
})