define([
	'Backbone'
	], function(Backbone) {

	var Table = Backbone.Model.extend({
		defaults: {
			title   : '',
			entries : []
		}

	});

	return Table;

});
