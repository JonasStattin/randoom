var
	express = require('express'),
	http = require('http'),
	path = require('path'),
	config = require('./config')

	mongo = require('mongodb'),
	monk = require('monk');

var
	app = express(),
	server = http.createServer(app)
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
