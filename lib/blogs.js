/**
 * Getting blogs
 */

var Blogs = function Blogs (request) {
	this._request		= request;
};

Blogs.prototype.getById = function(id, parameters, callback) {
	if( parameters === undefined ) parameters = {};
	
	this._request.executeRequest('blogs/'+id, parameters, callback);
};

Blogs.prototype.getCommentsById = function(id, parameters, callback) {
	if( parameters === undefined ) parameters = {};

	this._request.executeRequest('blogs/'+id+'/comments', parameters, callback);
};

Blogs.prototype.getFresh = function(parameters, callback) {
	if( parameters === undefined ) parameters = {};
	parameters.feature	= 'fresh';

	this._request.executeRequest('blogs', parameters, callback);
};

Blogs.prototype.getByUsername = function(username, parameters, callback) {
	if( parameters === undefined ) parameters = {};
	parameters.feature	= 'user';
	parameters.username	= username;

	this._request.executeRequest('blogs', parameters, callback);
};

Blogs.prototype.getByUserId = function(user_id, parameters, callback) {
	if( parameters === undefined ) parameters = {};
	parameters.feature	= 'user';
	parameters.user_id	= user_id;

	this._request.executeRequest('blogs', parameters, callback);
};

exports.Blogs = Blogs;