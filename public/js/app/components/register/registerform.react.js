define([
	'React',
	'../../dispatcher',
	], function(React, Dispatcher) {

	var TableEditor = React.createClass({
		save: function(e) {

			e.preventDefault();

			console.log( this.state );

			Dispatcher.dispatch({
				actionType: 'registerUser',
				data: this.state
			});
		},

		handleChange: function(e) {
			this.state[e.target.name] = e.target.value;
			this.setState(this.state);
		},

		componentDidMount: function() {

		},

		getInitialState: function() {
			return {
				username: 'Jonas',
				email: 'jonas@vinnovera.se',
				password: 'testpass',
				repeatpassword: 'testpass'
			};
		},

		render: function() {
			return (
				<form className="registerForm">
					<h1>Register a new user</h1>
					<label className="label" htmlFor="username">Username</label>
					<input className="textfield" type="text" id="username" name="username" ref="username" value={this.state.username} onChange={this.handleChange} />
					<label className="label" htmlFor="email">E-mail</label>
					<input className="textfield" type="text" id="email" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
					<label className="label" htmlFor="password">Password</label>
					<input className="textfield" type="password" id="password" name="password" ref="password" value={this.state.password} onChange={this.handleChange} />
					<label className="label" htmlFor="repeatpassword">Repeat password</label>
					<input className="textfield" type="password" id="repeatpassword" name="repeatpassword" ref="repeatpassword" value={this.state.repeatpassword} onChange={this.handleChange} />
					<button onClick={this.save}>Save</button>
				</form>
			);
		}
	});

	return TableEditor;

});
