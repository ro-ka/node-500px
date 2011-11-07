/**
 * Define the API
 */

var Request = require("./request").Request;
var Photos 	= require("./photos").Photos;
var Users 	= require("./users").Users;
var Blogs 	= require("./blogs").Blogs;

var API500px = function API500px (consumer_key) {
	this._configure(consumer_key);
};

API500px.prototype._configure = function (consumer_key) { 
	this.consumer_key 	= consumer_key;
	this._request 		= new Request(consumer_key);
	this.photos 		= new Photos(this._request);
	this.users 			= new Users(this._request);
	this.blogs 			= new Blogs(this._request);
};

exports.API500px = API500px;