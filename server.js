var
	express = require('express'),
	http = require('http'),
	path = require('path'),
	config = require('./config'),
	bodyParser = require('body-parser'),
	mongo = require('mongodb'),
	monk = require('monk');

var
	app = express(),
	server = http.createServer(app),
	jsonParser = bodyParser.json(),
	db = monk('localhost:27017/randoom');

app.set('port', process.env.PORT || config.expressPort);
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req, res, next){
	req.db = db;
	next();
});

server.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});

app.get('/tables', function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({}, {}, function(e, docs) {
		res.send(JSON.stringify(docs));
	});
});

app.get('/tables/:id', function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({owner:req.params.id}, {}, function(e, docs) {
		res.send(JSON.stringify(docs));
	});
});


app.post('/tables/:id', jsonParser, function(req, res) {
	console.log(req.body);
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.insert(req.body, {}, function(e, docs) {
		res.send(JSON.stringify({
			success: true
		}));
	});

});

app.put('/tables/:id', function(req, res) {
	console.log('A POST REQUEST WAS MADE');
});
