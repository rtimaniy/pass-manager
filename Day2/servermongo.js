var express=require('express');
var bp=require('body-parser');
var _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;

var app=express();
app.use(bp.json());

var db;

MongoClient.connect('mongodb://admin:admin@ds143767.mlab.com:43767/rajdb', (err, database) => {
	if (err) return console.log(erro)
	db = database

})

app.post('/addrecord',(req,res) => {
	db.collection('userdb').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
	})
})

app.get('/getrecord',(req,res) => {
	db.collection('userdb').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.json(result);
	})
})


app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});


