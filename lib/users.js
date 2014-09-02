/**
 * Getting user
 */

var Request = require('./request'),
  Users = function Users(consumer_key) {
    this._request = new Request(consumer_key);
  };

Users.prototype.getById = function(id, callback) {
  var parameters = {
    id: id
  };

  this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getByName = function(username, callback) {
  var parameters = {
    username: username
  };

  this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getByEmail = function(email, callback) {
  var parameters = {
    email: email
  };

  this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getFriendsById = function(id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  this._request.executeRequest(
    'users/' + id + '/friends',
    parameters,
    callback
  );
};

module.exports = Users;