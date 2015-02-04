define([
	'React',
	'../dispatcher'
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
					<label>{this.props.tag.tag}</label>
					<input type="checkbox" defaultChecked={this.props.tag.show} value={this.props.tag.tag} onChange={this.changeTag} />
				</li>
			);
		}
	});

	return Tag;

});
