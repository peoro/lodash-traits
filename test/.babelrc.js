
module.exports = function( api ) {
	api.cache.forever();

	return {
		"plugins": [
			{ parserOverride:require('@straits/babel').parse },
			"@straits/babel/plugin.js",
			"@babel/plugin-transform-strict-mode",
		]
	};
};
