define([
	'React',
	'jsx!./tag.react'
	], function(React, Tag) {

	var TagList = React.createClass({
		render: function() {
			var tags = [];
			this.props.tags.forEach(function(tag, i) {
				tags.push(<Tag tag={tag} key={i} />);
			});

			return (
				<ul>
					{tags}
				</ul>
			);
		}
	});

	return TagList;

});
