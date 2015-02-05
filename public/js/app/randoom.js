define([
	'React',
	'./dispatcher',
	'./stores/tablecollection',
	'./stores/tagcollection',
	'jsx!./components/header.react',
	'jsx!./components/tableview.react',
	'jsx!./components/createview.react',
	'jsx!./components/result.react'
	], function(React, Dispatcher, tableCollection, tagCollection, Header, TableView, CreateView, Result) {

	'use strict';
	var setup = function() {

		// Setup routes
		var Router = Backbone.Router.extend({
			routes : {
				"" : "tables",
				"tables" : "tables",
				"create" : "create"
			},
			tables : function() {
				React.render(<TableView />, document.getElementById('main'));
			},
			create : function() {
				React.render(<CreateView />, document.getElementById('main'));
			}
		});

		new Router();
		
		Backbone.history.start();

		// Load table data
		tableCollection.fetch({
			url: '/tables/' + 'gvqSrGPdX69KOk0u',
			success: function(payload) {
				var data = payload.toJSON();
				tagCollection.parseTags(data);
			}
		});

		// Render constant elements
		React.render(<Header />, document.getElementById('mainHeader'));
		React.render(<Result />, document.getElementById('resultWindow'));


	};

	return {
		setup: setup
	};
});
