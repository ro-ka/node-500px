/**
 * Getting photos
 */

var Photos = function Photos (request) {
	this._request= request;
};

Photos.prototype.getById = function(photo_id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	
	this._request.executeRequest('photos/'+photo_id, arguments, callback);
};

Photos.prototype.getByUsername = function(username, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user';
	arguments.username 	= username;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getByUserId = function(user_id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user';
	arguments.user_id 	= user_id;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFavoritesByUsername = function(username, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user_favorites';
	arguments.username 	= username;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFavoritesByUserId = function(user_id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user_favorites';
	arguments.user_id 	= user_id;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFriendsByUsername = function(username, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user_friends';
	arguments.username 	= username;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFriendsByUserId = function(user_id, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'user_friends';
	arguments.user_id 	= user_id;

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getPopular = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'popular';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getUpcoming = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'upcoming';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getEditorsChoice = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'editors';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFreshToday = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'fresh_today';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFreshYesterday = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'fresh_yesterday';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.getFreshWeek = function(arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.feature 	= 'fresh_week';

	this._request.executeRequest('photos', arguments, callback);
};

Photos.prototype.searchByTag = function(tag, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.tag 		= tag;

	this._request.executeRequest('photos/search', arguments, callback);
};

Photos.prototype.searchByTerm = function(term, arguments, callback) {
	if( arguments === undefined ) arguments = {};
	arguments.term 		= term;

	this._request.executeRequest('photos/search', arguments, callback);
};

exports.Photos = Photos;