/**
 * Getting user
 */

var Users = function Users (request) {
	this._request= request;
};

Users.prototype.getById = function(id, callback) {
	arguments 			= {};
	arguments.id 		= id;

	this._request.executeRequest('users/show', arguments, callback);
};

Users.prototype.getByName = function(username, callback) {
	arguments 			= {};
	arguments.username 	= username;

	this._request.executeRequest('users/show', arguments, callback);
};

Users.prototype.getByEmail = function(email, callback) {
	arguments 			= {};
	arguments.email 	= email;

	this._request.executeRequest('users/show', arguments, callback);
};

Users.prototype.getFriendsById = function(id, arguments, callback) {
	if( arguments === undefined ) arguments = {};

	this._request.executeRequest('users/'+id+'/friends', arguments, callback);
};

exports.Users = Users;