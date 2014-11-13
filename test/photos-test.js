/* global describe, it */

var should = require('should'),
  config = require('./config.js'),
  Photos = require('../lib/photos.js');

describe('Testing GET photos:', function() {
  var photos = new Photos(config.secrets.consumer_key),
    user_id = config.secrets.user_id,
    user_name = config.secrets.user_name;

  describe('#getById()', function() {
    it('should return a json with the photo data', function(done) {
      photos.getById('3086230', {}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photo');

        done();
      });
    });
  });

  describe('#getByUsername()', function() {
    it('should return a json with photos', function(done) {
      photos.getByUsername(user_name, {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getByUserId()', function() {
    it('should return a json with photos', function(done) {
      photos.getByUserId(user_id, {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFavoritesByUsername()', function() {
    it('should return a json with photos', function(done) {
      photos.getFavoritesByUsername(
        user_name,
        { 'rpp': 7 },
        function(err, result) {
          should.not.exist(err);
          should.exist(result);
          result.should.have.property('photos');
          result.photos.should.have.lengthOf(7);

          done();
        }
      );
    });
  });

  describe('#getFavoritesByUserId()', function() {
    it('should return a json with photos', function(done) {
      photos.getFavoritesByUserId(user_id, {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFriendsByUsername()', function() {
    it('should return a json with photos', function(done) {
      photos.getFriendsByUsername(user_name, {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFriendsByUserId()', function() {
    it('should return a json with photos', function(done) {
      photos.getFriendsByUserId(user_id, {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getPopular()', function() {
    it('should return a json with photos', function(done) {
      photos.getPopular({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getUpcoming()', function() {
    it('should return a json with photos', function(done) {
      photos.getUpcoming({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getEditorsChoice()', function() {
    it('should return a json with photos', function(done) {
      photos.getEditorsChoice({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFreshToday()', function() {
    it('should return a json with photos', function(done) {
      photos.getFreshToday({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFreshYesterday()', function() {
    it('should return a json with photos', function(done) {
      photos.getFreshYesterday({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#getFreshWeek()', function() {
    it('should return a json with photos', function(done) {
      photos.getFreshWeek({'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#searchByTag()', function() {
    it('should return a json with photos', function(done) {
      photos.searchByTag('hamburg', {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#searchByTerm()', function() {
    it('should return a json with photos', function(done) {
      photos.searchByTerm('hamburg', {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#searchByGeo()', function() {
    it('should return a json with photos', function(done) {
      photos.searchByGeo('37,126,100km', {'rpp': 7}, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);

        done();
      });
    });
  });

  describe('#searchWithMultiImageSize()', function() {
    it('should return a json with photos', function(done) {
      photos.searchByGeo('37,126,100km', {
        'rpp': 7, 'image_size[]': [1, 4]
      }, function(err, result) {
        should.not.exist(err);
        should.exist(result);
        result.should.have.property('photos');
        result.photos.should.have.lengthOf(7);
        result.photos[0].images.should.have.lengthOf(2);

        done();
      });
    });
  });
});
