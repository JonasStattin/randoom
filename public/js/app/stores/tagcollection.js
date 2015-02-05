define([
	'Backbone',
	'../dispatcher',
	'./tag'
	], function(Backbone, Dispatcher, Tag) {

	var TagCollection = Backbone.Collection.extend({
		model: Tag,

		initialize: function() {
			_.bindAll(this, 'dispatchCallback')
			this.dispatchToken = Dispatcher.register(this.dispatchCallback);
		},

		dispatchCallback: function(payload) {
			switch(payload.actionType) {
				case 'changeTag':
					var targetModel = _.find(this.models, function(model) {
						return payload.target === model.get('tag');
					});
					targetModel.set('show', payload.value);
					break;
			}
		},

		parseTags: function(payload) {
			var tags = [];
			payload.forEach(function(d) {
				d.tags.forEach(function(tag) {
					tags.push(tag);
				});
			});
			tags = _.uniq(tags);
			tags.forEach(function(tag) {
				this.add(new Tag({
					tag: tag
				}));
			}.bind(this));
		}
	});

	return new TagCollection;

});
