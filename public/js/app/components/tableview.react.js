define([
	'React',
	'jsx!./tables/taglist.react',
	'jsx!./tables/tablelist.react',
	], function(React, TagList, TableList) {

	var TableView = React.createClass({
		render: function() {
			return (
				<section id="tablesWindow" className="tablesWindow">
					<a href="#create" className="createTableLink">+ Create a new table</a>
					<a href="#register" className="createTableLink">+ Register a new user</a>
					<TagList />
					<TableList />
				</section>
			);
		}
	});

	return TableView;

});
