define([
	'React',
	'Handsontable'
	], function(React, Handsontable) {

	var TableEditor = React.createClass({

		componentDidMount: function() {

			console.log( Handsontable );

			var hot = new Handsontable(document.getElementById('example'), {
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
				</div>
			);
		}
	});

	return TableEditor;

});
