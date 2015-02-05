define([
	'Backbone'
	], function(Backbone) {

	var Tag = Backbone.Model.extend({
		defaults: {
			tag  : '',
			show : true
		}

	});

	return Tag;

});
