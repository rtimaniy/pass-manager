var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=58bd61e1f30fbe2cbc066c32f0571206';

module.exports = function (callback) {
request({
		url: url,
		json: true
}, function (error, response, body) {
	if (error) {
		callback('Unable to fetch weather.');
	} else {
		callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
	}
});
}