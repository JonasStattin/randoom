define([
	'React',
	'jsx!./tableresult.react'
	], function(React, TableResult) {

	var Table = React.createClass({
		roll: function() {
			var result = Math.floor(Math.random() * this.props.table.entries.length);
			alert( this.props.table.entries[result] );
		},
		render: function() {

			var entries = [];
			this.props.table.entries.forEach(function(entry, i) {
				entries.push(<TableResult result={entry} num={i+1} key={i} />);
			});

			return (
				<section className="table">
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
				</section>
			);
		}
	});

	return Table;

});
