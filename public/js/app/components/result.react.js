define([
	'React',
	'../stores/result'
	], function(React, ResultStore) {

	var Result = React.createClass({
		componentWillMount: function() {
			ResultStore.on('change', function() {
				this.setProps(ResultStore.toJSON());
			}.bind(this));
		},
		
		render: function() {
			return (
				<p>{this.props.result}</p>
			);
		}
	});

	return Result;

});
