/**
 * Request data from the API
 */

var https = require("https");

var Request= function Request(consumer_key) {
	this._configure(consumer_key);
};

Request.prototype._configure= function(consumer_key) {
	this.consumer_key= consumer_key;
	this.baseUrl= '/v1/';
	this.host = 'api.500px.com';
};

Request.prototype.executeRequest= function(method, arguments, callback) {
	
	var argumentString = '';
	if( arguments === undefined ) arguments = {};

	arguments.consumer_key = this.consumer_key;

	var operator = '?';
	for (var key in arguments) {
		argumentString += (operator + key + '=' + arguments[key]);
		if( operator === '?' ) operator= '&';
	}

	https.get({ 'host': this.host, 'path': this.baseUrl+method+argumentString }, function(res) {
		if ( res.statusCode && res.statusCode === 200 ) {
		  var chunks="";
			res.on('data', function(resultData) {
				chunks+=resultData;
			});
			res.on('end', function() {
				callback(null, JSON.parse(chunks));
	      		});
		} else {
			callback({code: res.StatusCode});
		}
	}).on('error', function(error) {
		callback(error)
	});
};

exports.Request = Request;
