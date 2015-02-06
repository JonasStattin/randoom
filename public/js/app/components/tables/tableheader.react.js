define([
	'React'
	], function(React) {

	var TableResult = React.createClass({
		render : function() {
			var cells = [];
			cells.push(<th key='0'>Range</th>);
			if(_.isArray(this.props.headings) === true) {
				this.props.headings.forEach(function(heading, i) {
					cells.push(<th key={i+1}>{heading}</th>);
				});
			} else {
				cells.push(<th key='1'>{this.props.headings}</th>);
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
