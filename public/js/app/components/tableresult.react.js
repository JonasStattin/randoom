define([
	'React'
	], function(React) {

	var TableResult = React.createClass({
		render : function() {
			return (
				<tr>
					<td>{this.props.num}.</td>
					<td>{this.props.result}</td>
				</tr>
			);
		}
	});

	return TableResult;

});
