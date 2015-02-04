define([
	'Backbone',
	'./tag'
	], function(Backbone, Tag) {

	var TagCollection = Backbone.Collection.extend({
		model: Tag,

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
