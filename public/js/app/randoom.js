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
				var data = payload.toJSON();

				var tags = [];
				data.forEach(function(d) {
					d.tags.forEach(function(tag) {
						tags.push(tag);
					});
				});
				tags = _.uniq(tags);

				React.render(<TableList tables={data} />, document.getElementById('tablesWindow'));
				React.render(<Result />, document.getElementById('resultWindow'));
			}
		});

	};

	return {
		setup: setup
	};
});
