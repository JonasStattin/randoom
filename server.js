var
	express = require('express'),
	http = require('http'),
	path = require('path'),
	config = require('./config');

var
	app = express(),
	server = http.createServer(app);

app.set('port', process.env.PORT || config.expressPort);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});

app.get('/tables', function(req, res) {
	var TABLES = [
		{
			title: 'My first table',
			entries: [
				'The first result',
				'Result the second',
				'A third result'
			]
		},
		{
			title: 'My second table',
			entries: [
				'The result premiere',
				'Secondi Resulti',
				'Tripoli',
				'Quattro Formaggio'
			]
		}
	];
	res.send(JSON.stringify(TABLES));
});
