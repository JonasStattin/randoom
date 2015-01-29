define([
	'React',
	'./dispatcher',
	'./stores/tablecollection',
	'jsx!./components/tablelist.react'
	], function(React, Dispatcher, TableCollection, TableList) {

	'use strict';
	var setup = function() {

		var tableData = new TableCollection();
		tableData.fetch({
			success: function(payload) {
				React.render(<TableList tables={payload.toJSON()} />, document.body);
			}
		});

	};

	return {
		setup: setup
	};
});
