define([
	'React',
	'./dispatcher',
	'./stores/tableCollection',
	'jsx!./components/tablelist.react'
	], function(React, Dispatcher, TableCollection, TableList) {

	'use strict';
	var setup = function() {

		var TABLES = [
			{
				title: 'My first table',
				entries: [
					'The first result',
					'Result the second',
					'A third result'
				]
			},
			{
				title: 'My second table',
				entries: [
					'The result premiere',
					'Secondi Resulti',
					'Tripoli',
					'Quattro Formaggio'
				]
			}
		];

		React.render(<TableList tables={TABLES} />, document.body);

	};

	return {
		setup: setup
	};
});
