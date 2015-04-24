define([
	'Backbone'
	], function(Backbone) {

	var User = Backbone.Model.extend({
		defaults: {
			username: '',
			email: '',
			password: '',
			repeatpassword: ''
		}

	});

	return User;

});
