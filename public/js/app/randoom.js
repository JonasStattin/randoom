define([
	'React',
	'./dispatcher',
	'./stores/tablecollection',
	'jsx!./components/tablelist.react',
	'jsx!./components/result.react'
	], function(React, Dispatcher, TableCollection, TableList, Result) {

	'use strict';
	var setup = function() {

		var tableData = new TableCollection();
		tableData.fetch({
			success: function(payload) {
				React.render(<TableList tables={payload.toJSON()} />, document.getElementById('tables'));
				React.render(<Result />, document.getElementById('result'));
			}
		});

	};

	return {
		setup: setup
	};
});
