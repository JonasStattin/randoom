define([
	'React',
	'jsx!./create/tableeditor.react'
	], function(React, TableEditor) {

	var CreateView = React.createClass({
		render: function() {
			return (
				<section id="createWindow" className="createWindow">
					<a href="#tables" className="listTablesLink">&laquo; Table list</a>
					<div className="createForm">
						<p>Create a new table</p>
						<TableEditor table={this.props.table} />
					</div>
				</section>
			);
		}
	});

	return CreateView;

});
