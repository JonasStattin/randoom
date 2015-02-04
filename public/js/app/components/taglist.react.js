define([
	'React',
	'jsx!./tag.react'
	], function(React, Tag) {

	var TagList = React.createClass({
		render: function() {
			var tags = [];
			tags.push(<li key={0} className="tagHeader">Tags:</li>);
			this.props.tags.forEach(function(tag, i) {
				tags.push(<Tag tag={tag} key={i+1} />);
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
