/**
 * Define the API
 */

var Photos = require("./photos").Photos,
  Users = require("./users").Users,
  Blogs = require("./blogs").Blogs,

  API500px = function API500px(consumer_key) {
    this._configure(consumer_key);
  };

API500px.prototype._configure = function(consumer_key) {
  this.photos = new Photos(consumer_key);
  this.users = new Users(consumer_key);
  this.blogs = new Blogs(consumer_key);
};

exports.API500px = API500px;