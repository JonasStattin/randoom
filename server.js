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
