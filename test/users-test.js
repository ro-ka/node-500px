/* global describe, it */

var should = require('should'),
  config = require('./config.js'),
  Users = require('../lib/users.js');

describe('Testing GET users:', function() {
  var users = new Users(config.secrets.consumer_key),
    user_id = config.secrets.user_id,
    user_name = config.secrets.user_name,
    user_email = config.secrets.user_email;

  describe('#getById()', function() {
    it('should return a json with the user data', function(done) {
      users.getById(user_id, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('user');

        done();
      });
    });
  });

  describe('#getByName()', function() {
    it('should return a json with the user data', function(done) {
      users.getByName(user_name, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('user');

        done();
      });
    });
  });

  describe('#getByEmail()', function() {
    it('should return a json with the user data', function(done) {
      users.getByEmail(user_email, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('user');

        done();
      });
    });
  });

  describe('#getFriendsById()', function() {
    it('should return a json with the friends data', function(done) {
      users.getFriendsById(user_id, {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('friends');

        done();
      });
    });
  });
});