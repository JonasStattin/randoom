define([
	'Backbone'
	], function(Backbone) {

	var Table = Backbone.Model.extend({
		defaults: {
			title   : '',
			show    : true,
			entries : [],
			tags    : []
		},

		setShow: function(tags) {
			var show = false;
			var myTags = this.get('tags');
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
