var weather = require('./weather.js');
var ipInfo = require('./locationInfo.js');

weather(function (currentWeather) {
	console.log(currentWeather);
});

ipInfo(function (myIP) {
	console.log(myIP);
});