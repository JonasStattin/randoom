define([
	'React',
	'../../dispatcher'
	], function(React, Dispatcher) {

	var Tag = React.createClass({
		changeTag: function(e) {
			Dispatcher.dispatch({
				actionType: 'changeTag',
				target: e.target.value,
				value: e.target.checked
			});
		},

		render : function() {
			return (
				<li>
					<input type="checkbox" defaultChecked={this.props.tag.show} value={this.props.tag.tag} onChange={this.changeTag} id={this.props.tag.tag} />
					<label htmlFor={this.props.tag.tag}>{this.props.tag.tag}</label>
				</li>
			);
		}
	});

	return Tag;

});
