define([
	'React',
	'jsx!./table.react',
	'../stores/tablecollection'
	], function(React, Table, tableCollection) {

	var TableList = React.createClass({
		getInitialState: function() {
			return {
				tables: tableCollection.toJSON()
			};
		},

		componentWillMount: function() {
			tableCollection.on('change', function() {
				this.setState({
					tables: tableCollection.toJSON()
				});
			}.bind(this));
		},

		render: function() {
			var tables = [];
			this.state.tables.forEach(function(table, i) {
				if(table.show === true) {
					tables.push(<Table table={table} key={i} />);
				}
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
