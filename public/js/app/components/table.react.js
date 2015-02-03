define([
	'React',
	'jsx!./tableresult.react',
	'../dispatcher',
	], function(React, TableResult, Dispatcher) {

	var Table = React.createClass({
		getPossibilities: function() {
			var possibilities = 0;
			this.props.table.entries.forEach(function(entry) {
				if(_.isObject(entry.range) === true) {
					possibilities += entry.range.to - entry.range.from + 1;
				} else {
					possibilities++;
				}
			});
			return possibilities;
		},

		getResult: function(possibilities) {
			var result = '';
			var isRangeTable = _.isObject(this.props.table.entries[0].range);
			var resultLength = _.isArray(this.props.table.entries[0].result) ? this.props.table.entries[0].result.length : 1;

			if(resultLength === 1) {
				var roll = Math.floor(Math.random() * possibilities);
				result = this.props.table.entries[roll].result;
			} else {
				for(var i=0;i<resultLength;i++) {
					var roll = Math.floor(Math.random() * possibilities);
					if(isRangeTable === true) {
						var useEntry;
						this.props.table.entries.forEach(function(entry) {
							if(roll >= entry.range.from && roll <= entry.range.to) {
								useEntry = entry;
							}
						});
						result += useEntry.result[i] + ' ';
					} else {
						result += this.props.table.entries[roll].result[i] + ' ';
					}
				}
			}

			return result.trim();
		},

		roll: function() {
			var possibilities = this.getPossibilities();
			var result = this.getResult(possibilities);

			Dispatcher.dispatch({
				actionType: 'changeResult',
				value: result
			});

		},

		render: function() {
			var entries = [];
			this.props.table.entries.forEach(function(entry, i) {
				entries.push(<TableResult result={entry.result} range={entry.range} key={i} />);
			});

			return (
				<li className="table">
					<header>
						<h3 className="tableHeading">{this.props.table.title}</h3>
						<button className="roll" onClick={this.roll}>Roll</button>
					</header>
					<table>
						<tbody>{entries}</tbody>
					</table>
				</li>
			);
		}
	});

	return Table;

});
