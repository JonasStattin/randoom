define([
	'Backbone',
	'../dispatcher'
	], function(Backbone, Dispatcher) {

	var Tag = Backbone.Model.extend({
		defaults: {
			tag  : '',
			show : true
		},

		initialize: function() {
			_.bindAll(this, 'dispatchCallback')
			Dispatcher.register(this.dispatchCallback);
		},

		dispatchCallback: function(payload) {
			switch(payload.actionType) {
				case 'changeTag':
					if(payload.target === this.get('tag')) {
						this.set('show', payload.value);
					}
					break;
			}
		}

	});

	return Tag;

});
