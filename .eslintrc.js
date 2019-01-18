module.exports = {
	plugins: [
		"babel"
	],
	extends: [
		"xo/esnext",
		"plugin:prettier/recommended"
	], 
	parser: "babel-eslint",
	rules:{
		semi: ["error", "never"]
	}
};