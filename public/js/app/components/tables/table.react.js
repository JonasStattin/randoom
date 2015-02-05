define([
	'React',
	'jsx!./tableresult.react',
	'../../dispatcher',
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
						result += useEntry.result[i] + ', ';
					} else {
						result += this.props.table.entries[roll].result[i] + ', ';
					}
				}
			}

			result = result.trim();
			if(result.charAt(result.length-1) === ',') {
				result = result.substr(0, result.length-1)
			}

			return result;
		},

		roll: function() {
			var possibilities = this.getPossibilities();
			var result = this.getResult(possibilities);

			Dispatcher.dispatch({
				actionType: 'changeResult',
				value: result
			});

		},

		changeFold: function() {
			Dispatcher.dispatch({
				actionType: 'changeFoldStatus',
				target: this.props.table._id,
				value: !this.props.table.folded
			});
		},

		render: function() {
			var entries = [];
			this.props.table.entries.forEach(function(entry, i) {
				entries.push(<TableResult result={entry.result} range={entry.range} key={i} />);
			});

			var tags = [];
			this.props.table.tags.forEach(function(tag, i) {
				tags.push(<li key={i}>{tag}</li>);
			});

			var cx = React.addons.classSet;
			var tableClasses = cx({
				'folded': this.props.table.folded
			});
			var foldButtonClasses = cx({
				'foldButton': true,
				'folded': this.props.table.folded
			});

			return (
				<li className="table">
					<header>
						<ul className="tags">{tags}</ul>
						<h3 className="tableHeading">{this.props.table.title}</h3>
						<button className="roll" onClick={this.roll}>Roll</button>
					</header>
					<table className={tableClasses}>
						<tbody>{entries}</tbody>
					</table>
					<button onClick={this.changeFold} className={foldButtonClasses}>Change fold</button>
				</li>
			);
		}
	});

	return Table;

});
