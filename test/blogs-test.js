/* global describe, it */

var should = require('should'),
  config = require('./config.js'),
  Blogs = require('../lib/blogs.js');

describe('Testing GET blogs:', function() {
  var blogs = new Blogs(config.secrets.consumer_key),
    user_id = config.secrets.user_id,
    user_name = config.secrets.user_name;

  describe('#getById()', function() {
    it('should return a json with the blog data', function(done) {
      blogs.getById(27105, {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('body');

        done();
      });
    });
  });

  describe('#getCommentsById()', function() {
    it('should return a json with the blog comments', function(done) {
      blogs.getCommentsById(1704, {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('comments');

        done();
      });
    });
  });

  describe('#getFresh()', function() {
    it('should return a json with the freshest blogs data', function(done) {
      blogs.getFresh({'rpp': '10'}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('blog_posts');
        result.blog_posts.should.have.lengthOf(10);

        done();
      });
    });
  });

  describe('#getByUsername()', function() {
    it('should return a json with the blog data', function(done) {
      blogs.getByUsername(user_name, {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('blog_posts');

        done();
      });
    });
  });

  describe('#getByUserId()', function() {
    it('should return a json with the blog data', function(done) {
      blogs.getByUserId(user_id, {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('blog_posts');

        done();
      });
    });
  });
});