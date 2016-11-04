var express=require('express');
var bp=require('body-parser');

var app=express();
app.use(bp.json());

var mytask=[
{
	"description" : "watch movi",
	"completed" : true
},
{
	"description" : "Scrum Meeting",
	"completed" : false
},
{
	"description" : "NodeJS Trainig",
	"completed" : true
}
];

app.use(express.static('public'));

app.get('/about',function(req,res){
	res.send('Welcome to about page');
});

app.get('/contact',function(req,res){
	res.send('Welcome to contact page');
});

app.get('/getmytasks',function(req,res) {
	res.json(mytask);
});

app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});