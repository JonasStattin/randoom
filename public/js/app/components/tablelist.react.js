define([
	'React',
	'jsx!./table.react'
	], function(React, Table) {

	var TableList = React.createClass({
		render: function() {
			var tables = [];
			this.props.tables.forEach(function(table, i) {
				tables.push(<Table table={table} key={i} />);
			});
			
			return (
				<ul>
					{tables}
				</ul>
			);
		}
	});

	return TableList;

});
