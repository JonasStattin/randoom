define([
	'React',
	'./dispatcher',
	'./stores/tablecollection',
	'./stores/tagcollection',
	'jsx!./components/header.react',
	'jsx!./components/taglist.react',
	'jsx!./components/tablelist.react',
	'jsx!./components/result.react'
	], function(React, Dispatcher, tableCollection, tagCollection, Header, TagList, TableList, Result) {

	'use strict';
	var setup = function() {

		tableCollection.fetch({
			success: function(payload) {
				var data = payload.toJSON();

				tagCollection.parseTags(data);

				React.render(<TagList tags={tagCollection.toJSON()} />, document.getElementById('tagsWindow'));
				React.render(<TableList />, document.getElementById('tablesWindow'));
				React.render(<Result />, document.getElementById('resultWindow'));
			}
		});

		React.render(<Header />, document.getElementById('mainHeader'));

	};

	return {
		setup: setup
	};
});
