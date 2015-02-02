define([
	'React',
	'../dispatcher',
	'../stores/result'
	], function(React, Dispatcher, ResultStore) {

	var Result = React.createClass({
		getInitialState: function() {
			return {
				result: ''
			};
		},

		componentWillMount: function() {
			ResultStore.on('change', function() {
				this.setState(ResultStore.toJSON());
			}.bind(this));
		},

		componentDidUpdate: function() {
			var node = this.getDOMNode();
			var top = document.body.scrollTop + (window.innerHeight / 2 ) - (node.offsetHeight / 2);
			node.style.top = top + 'px';
		},

		close: function() {
			Dispatcher.dispatch({
				actionType: 'changeResult',
				value: ''
			});
		},

		render: function() {
			var cx = React.addons.classSet;
			var classes = cx({
				resultBox: true,
				show: (this.state.result !== '')
			});

			return (
				<figure className={classes}>
					<header className="resultHeader">
						<h3 className="resultHeading">Result</h3>
						<button className="close" onClick={this.close}>X</button>
					</header>
					<p className="resultOutput">{this.state.result}</p>
				</figure>
			);
		}
	});

	return Result;

});
