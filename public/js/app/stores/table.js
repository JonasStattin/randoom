define([
	'Backbone',
	'./tagcollection'
	], function(Backbone, tagCollection) {

	var Table = Backbone.Model.extend({
		defaults: {
			title   : '',
			show    : true,
			entries : [],
			tags    : []
		},

		initialize: function() {
			tagCollection.on('change', function() {
				this.setShow();
			}.bind(this));
		},

		setShow: function() {
			var show = false;
			var myTags = this.get('tags');
			var tags = tagCollection.toJSON();
			myTags.forEach(function(myTag) {
				var compareTag = _.find(tags, function(tag) {
					return tag.tag === myTag;
				});
				if(compareTag.show === true) {
					show = true;
				}
			});
			this.set('show', show);
		}

	});

	return Table;

});
