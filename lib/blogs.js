/**
 * Getting blogs
 */

var Blogs = function Blogs (request) {
	this._request= request;
};

Blogs.prototype.getById = function(id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	
	this._request.executeRequest('blogs/'+id, arguments, callback);
};

Blogs.prototype.getCommentsById = function(id, arguments, callback) {
	if( arguments === undefined ) arguments = {};

	this._request.executeRequest('blogs/'+id+'/comments', arguments, callback);
};

Blogs.prototype.getFresh = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'fresh';

	this._request.executeRequest('blogs', arguments, callback);
};

Blogs.prototype.getByUsername = function(username, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user';
	arguments.username 	= username;

	this._request.executeRequest('blogs', arguments, callback);
};

Blogs.prototype.getByUserId = function(user_id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user';
	arguments.user_id 	= user_id;

	this._request.executeRequest('blogs', arguments, callback);
};

exports.Blogs = Blogs;