exports.listTables = function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({}, {}, function(e, docs) {
		res.send(JSON.stringify(docs));
	});
}

exports.getTable = function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({owner:req.params.id}, {}, function(e, docs) {
		res.send(JSON.stringify(docs));
	});
}


exports.saveTable = function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.insert(req.body, {}, function(e, docs) {
		res.send(JSON.stringify({
			success: true
		}));
	});
}
