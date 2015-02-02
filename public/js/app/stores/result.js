define([
	'Backbone',
	'../dispatcher'
	], function(Backbone, Dispatcher) {

	var Result = Backbone.Model.extend({
		defaults: {
			result   : ''
		},

		initialize: function() {
			_.bindAll(this, 'dispatchCallback')
			Dispatcher.register(this.dispatchCallback);
		},

		dispatchCallback: function(payload) {
			switch(payload.actionType) {
				case 'changeResult':
					this.set('result', payload.value);
					break;
			}
		}

	});

	return new Result;

});
