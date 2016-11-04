var express=require('express');
var bp=require('body-parser');
var _ = require('underscore');

var app=express();
app.use(bp.json());

var mytask=[]
var taskid=1;

app.post('/postmytasks', function(req,res) {
	var body = req.body;
	body.id=taskid++;
	mytask.push(body);
	res.json(body);
});


app.get('/getmytasks',function(req,res) {
	res.json(mytask);

});

app.get('/getmytasks/:id', function(req, res){
	var todoId=parseInt(req.params.id,10);

	var matchedtodo=_.findWhere(mytask,{id:todoId});

	if(!matchedtodo) {
		res.status(404).send();
	} else {
		res.json(matchedtodo);
	}
});


app.delete('/deletedata/:id', function(req, res){
	var todoId=parseInt(req.params.id,10);

	var matchedtodo=_.findWhere(mytask,{id:todoId});

	if(!matchedtodo) {
		res.status(404).json({"erro":"Id not found"});
	} else {
		mytask=_.without(mytask,matchedtodo);
		res.json(matchedtodo);
	}
});


app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});