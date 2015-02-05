define([
	'React',
	'jsx!./tag.react',
	'../../stores/tagcollection'
	], function(React, Tag, tagCollection) {

	var TagList = React.createClass({
		getInitialState: function() {
			return {
				tags: tagCollection.toJSON()
			};
		},

		componentWillMount: function() {
			tagCollection.on('change add', function() {
				this.setState({
					tags: tagCollection.toJSON()
				});
			}.bind(this));
		},

		componentWillUnmount: function() {
			tagCollection.off('change add');
		},

		render: function() {
			var tags = [];
			tags.push(<li key={0} className="tagHeader">Tags:</li>);
			this.state.tags.forEach(function(tag, i) {
				tags.push(<Tag tag={tag} key={i+1} />);
			});

			return (
				<ul className="tagList">
					{tags}
				</ul>
			);
		}
	});

	return TagList;

});
