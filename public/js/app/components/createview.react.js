define([
	'React'
	], function(React) {

	var CreateView = React.createClass({
		render: function() {
			return (
				<section id="createWindow" className="createWindow">
					<a href="#tables" className="listTablesLink">&laquo; Table list</a>
					<div className="createForm">
						<p>Create a new table</p>
					</div>
				</section>
			);
		}
	});

	return CreateView;

});
