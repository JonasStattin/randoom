define([
	'React',
	'Handsontable',
	'../../dispatcher',
	'../../stores/table'
	], function(React, Handsontable, Dispatcher, Table) {

	var TableEditor = React.createClass({
		save: function() {
			Dispatcher.dispatch({
				actionType: 'createNewTable',
				data: this.hot.getData()
			});
		},

		componentDidMount: function() {


			this.hot = new Handsontable(document.getElementById('example'), {
				data: [
					['', 'Maserati', 'Mazda', 'Mercedes', 'Mini', 'Mitsubishi'],
					['2009', 0, 2941, 4303, 354, 5814],
					['2010', 3, 2905, 2867, 412, 5284],
					['2011', 4, 2517, 4822, 552, 6127],
					['2012', 2, 2422, 5399, 776, 4151]
				],
				minSpareRows: 1,
				colHeaders: true,
				contextMenu: true
			});

		},

		render: function() {
			return (
				<div className="tableEditor">
					<div id="example" className="handsontable"></div>
					<button onClick={this.save}>Save</button>
				</div>
			);
		}
	});

	return TableEditor;

});
