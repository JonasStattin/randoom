require.config({
	baseUrl : 'js',
	paths   : {
		jquery           : 'vendor/jquery',
		underscore       : 'vendor/underscore',
		Backbone         : 'vendor/backbone',
		React            : 'vendor/react-with-addons',
		Flux             : 'vendor/flux',
		jsx              : 'vendor/jsx',
		JSXTransformer   : 'vendor/JSXTransformer',
	},
	shim: {
		backbone: {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		},
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	}
});

require(['jsx!app/randoom'], function(FluxBone) {
	FluxBone.setup();
});
