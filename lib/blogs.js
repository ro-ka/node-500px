/**
 * Getting blogs
 */

var Request = require('./request'),
  Blogs = function Blogs (consumer_key) {
    this._request = new Request(consumer_key);
  };

Blogs.prototype.getById = function(id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  this._request.executeRequest('blogs/' + id, parameters, callback);
};

Blogs.prototype.getCommentsById = function(id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  this._request.executeRequest(
    'blogs/' + id + '/comments',
    parameters,
    callback
  );
};

Blogs.prototype.getFresh = function(parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'fresh';

  this._request.executeRequest('blogs', parameters, callback);
};

Blogs.prototype.getByUsername = function(username, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'user';
  parameters.username = username;

  this._request.executeRequest('blogs', parameters, callback);
};

Blogs.prototype.getByUserId = function(user_id, parameters, callback) {
  if (!parameters) {
    parameters = {};
  }

  parameters.feature = 'user';
  parameters.user_id = user_id;

  this._request.executeRequest('blogs', parameters, callback);
};

module.exports = Blogs;