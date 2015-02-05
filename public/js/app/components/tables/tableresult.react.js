define([
	'React'
	], function(React) {

	var TableResult = React.createClass({
		render : function() {
			var range = _.isObject(this.props.range) ? this.props.range.from + ' - ' + this.props.range.to : this.props.range;

			var cells = [];
			cells.push(<td key='0'>{range}</td>);
			if(_.isArray(this.props.result) === true) {
				this.props.result.forEach(function(result, i) {
					cells.push(<td key={i+1}>{result}</td>);
				});
			} else {
				cells.push(<td key='1'>{this.props.result}</td>);
			}

			return (
				<tr>
					{cells}
				</tr>
			);
		}
	});

	return TableResult;

});
