define([
	'React',
	'jsx!./table.react',
	'../../stores/tablecollection'
	], function(React, Table, tableCollection) {

	var TableList = React.createClass({
		getInitialState: function() {
			return {
				tables: tableCollection.toJSON()
			};
		},

		componentDidMount: function() {
			tableCollection.on('change add', function() {
				this.setState({
					tables: tableCollection.toJSON()
				});
			}.bind(this));
		},

		componentWillUnmount: function() {
			tableCollection.off('change add');
		},

		render: function() {
			var tables = [];
			this.state.tables.forEach(function(table, i) {
				if(table.show === true) {
					tables.push(<Table table={table} key={i} />);
				}
			});

			return (
				<ul className="tableList">
					{tables}
				</ul>
			);
		}
	});

	return TableList;

});
