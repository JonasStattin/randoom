define([
	'React',
	'jsx!./tableresult.react',
	'../dispatcher',
	], function(React, TableResult, Dispatcher) {

	var Table = React.createClass({
		roll: function() {
			var result = Math.floor(Math.random() * this.props.table.entries.length);
			result = this.props.table.entries[result];
			Dispatcher.dispatch({
				actionType: 'changeResult',
				value: result
			});
		},
		
		render: function() {
			var entries = [];
			this.props.table.entries.forEach(function(entry, i) {
				entries.push(<TableResult result={entry} num={i+1} key={i} />);
			});

			return (
				<li className="table">
					<header>
						<h3>{this.props.table.title}</h3>
						<button onClick={this.roll}>Roll</button>
					</header>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>Result</th>
							</tr>
						</thead>
						<tbody>{entries}</tbody>
					</table>
				</li>
			);
		}
	});

	return Table;

});
