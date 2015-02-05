define([
	'Backbone',
	'../dispatcher',
	'./tagcollection',
	'./table'
	], function(Backbone, Dispatcher, tagCollection, Table) {

	var TableCollection = Backbone.Collection.extend({
		model: Table,
		url: '/tables',

		initialize: function() {
			_.bindAll(this, 'dispatchCallback')
			Dispatcher.register(this.dispatchCallback);
		},

		dispatchCallback: function(payload) {
			switch(payload.actionType) {
				case 'changeTag':
					Dispatcher.waitFor([tagCollection.dispatchToken]);
					var tags = tagCollection.toJSON();
					this.models.forEach(function(table) {
						table.setShow(tags);
					});
					break;
			}
		},
	});

	return new TableCollection;

});
