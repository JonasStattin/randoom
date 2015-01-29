define([
	'Backbone',
	'./table'
	], function(Backbone, Table) {

	var TableCollection = Backbone.Collection.extend({
		model: Table
	});

	return Table;

});
