define([
	'React',
	'jsx!./register/registerform.react'
], function(React, RegisterForm) {

	var CreateView = React.createClass({
		render: function() {
			return (
				<section id="registerWindow" className="registerWindow">
					<a href="#tables" className="listTablesLink">&laquo; Table list</a>
					<RegisterForm />
				</section>
			);
		}
	});

	return CreateView;

});
