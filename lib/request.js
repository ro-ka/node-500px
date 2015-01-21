/**
 * Request data from the API
 */

var https = require('https'),
  querystring = require('querystring'),
  Request = function Request(consumer_key) {
    this._configure(consumer_key);
  };

Request.prototype._configure = function(consumer_key) {
  this.consumer_key = consumer_key;
  this.baseUrl = '/v1/';
  this.host = 'api.500px.com';
};

Request.prototype.executeRequest = function(method, parameters, callback) {
  if (parameters === undefined) {
    parameters = {};
  }

  parameters.consumer_key = this.consumer_key;

  https.get({
      'host': this.host,
      'path': this.baseUrl + method + '?' + querystring.stringify(parameters) },
    function(res) {
      var chunks = '';
      res.on('data', function(resultData) {
        chunks += resultData;
      });
      res.on('end', function() {
        var body = JSON.parse(chunks);

        if (body.error) {
          callback({
            message: body.error,
            code: body.status
          }, null);
        } else {
          callback(null, body);
        }
      });
    }
  ).on('error', function(error) {
    callback(error);
  });
};

module.exports = Request;
