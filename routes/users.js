exports.register = function(req, res) {
	var db = req.db;
	console.log(req.body);
	/*
	var collection = db.get('usercollection');
	collection.insert(req.body, {}, function(e, docs) {
		res.send(JSON.stringify({
			success: true
		}));
	});
	*/
}
