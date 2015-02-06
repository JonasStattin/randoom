define([
	'React',
	'./dispatcher',
	'./stores/tablecollection',
	'./stores/tagcollection',
	'./stores/table',
	'jsx!./components/header.react',
	'jsx!./components/tableview.react',
	'jsx!./components/createview.react',
	'jsx!./components/result.react'
	], function(React, Dispatcher, tableCollection, tagCollection, Table, Header, TableView, CreateView, Result) {

	'use strict';
	var setup = function() {
		// Render constant elements
		React.render(<Header />, document.getElementById('mainHeader'));
		React.render(<Result />, document.getElementById('resultWindow'));

		// Load table data
		tableCollection.fetch({
			url: '/tables/' + 'gvqSrGPdX69KOk0u',
			success: function(payload) {
				var data = payload.toJSON();
				tagCollection.parseTags(data);
			}
		});

		// Manage table saving
		var saveTable = new Table();
		saveTable.url = '/tables/' + 'gvqSrGPdX69KOk0u';
		Dispatcher.register(function(payload) {
			switch(payload.actionType) {
				case 'createNewTable':
					var entries = [];
					var headings = [];
					payload.data.forEach(function(entry, i) {
						if(i === 0) {
							entry.forEach(function(heading, i) {
								if(i > 0) {
									headings.push(heading);
								}
							});
						} else {
							var lastEntry = entries.push({
								range: entry[0],
								result: []
							});
							entry.forEach(function(result, i) {
								if(i > 0) {
									entries[lastEntry-1].result.push(result);
								}
							});
						}
					});

					saveTable.set('title', 'My new table');
					saveTable.set('tags', ['Group New']);
					saveTable.set('entries', entries);
					saveTable.set('headings', headings);
					saveTable.set('owner', 'gvqSrGPdX69KOk0u');

					saveTable.save({
						success: function() {
							console.log('Success response from server');
						},
						error: function() {
							console.log('Error response from server');
						},
					});

					break;
			}
		});

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
				React.render(<CreateView table={saveTable.toJSON()} />, document.getElementById('main'));
			}
		});
		new Router();
		Backbone.history.start();

	};

	return {
		setup: setup
	};
});
