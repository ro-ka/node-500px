/**
 * Getting user
 */

var Request		= require("./request").Request;

var Users = function Users(consumer_key) {
	this._request		= new Request(consumer_key);
};

Users.prototype.getById = function(id, callback) {
	var parameters		= {};
	parameters.id		= id;

	this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getByName = function(username, callback) {
	var parameters		= {};
	parameters.username	= username;

	this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getByEmail = function(email, callback) {
	var parameters		= {};
	parameters.email	= email;

	this._request.executeRequest('users/show', parameters, callback);
};

Users.prototype.getFriendsById = function(id, parameters, callback) {
	if (parameters === undefined) parameters = {};

	this._request.executeRequest('users/'+id+'/friends', parameters, callback);
};

exports.Users = Users;