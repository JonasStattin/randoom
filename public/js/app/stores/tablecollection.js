define([
	'Backbone',
	'../dispatcher',
	'./tagcollection',
	'./table'
	], function(Backbone, Dispatcher, tagCollection, Table) {

	var TableCollection = Backbone.Collection.extend({
		model: Table,

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
				case 'changeFoldStatus':
					var foldStatusTarget = _.find(this.models, function(table) {
						return table.get('_id') === payload.target;
					});
					foldStatusTarget.set('folded', payload.value);
					break;
			}
		},
	});

	return new TableCollection;

});
