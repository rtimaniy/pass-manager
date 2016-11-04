var express=require('express');
var bp=require('body-parser');

var app=express();
app.use(bp.json());

var mytask=[]
var taskid=1;

app.post('/postmytasks', function(req,res) {
	var body = req.body;
	body.id=taskid;
	mytask.push(body);
	res.json(body);
	taskid++;
});


app.get('/getmytasks',function(req,res) {
	res.json(mytask);

});

app.get('/getmytasks/:id', function(req, res){
	var todoId=parseInt(req.params.id,10);

	var matchedtodo;
	mytask.forEach(function(todo) {
		if(todoId===todo.id) {
			matchedTodo=todo;
		}
	});


	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});


app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});