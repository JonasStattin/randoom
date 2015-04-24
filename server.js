// Require external files
var
	express      = require('express'),
	http         = require('http'),
	path         = require('path'),
	config       = require('./config'),
	bodyParser   = require('body-parser'),
	mongo        = require('mongodb'),
	monk         = require('monk')
	rTables      = require('./routes/tables'),
	rUsers      = require('./routes/users');

// Variables
var
	app          = express(),
	server       = http.createServer(app),
	jsonParser   = bodyParser.json(),
	db           = monk('localhost:27017/randoom');

// Set which port to serve on
app.set('port', process.env.PORT || config.expressPort);

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next){
	req.db = db;
	next();
});

// Start listening
server.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});

// Table routes
app.get('/tables', rTables.listTables);
app.get('/tables/:id', rTables.getTable);
app.post('/tables/:id', jsonParser, rTables.saveTable);

// User routes
app.post('/users/register', jsonParser, rUsers.register);
