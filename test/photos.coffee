should = require 'should'
config = require './config'
Photos = require '../lib/photos'

describe 'Testing GET photos:', ->
  photos = new Photos(config.secrets.consumer_key)
  user_id = config.secrets.user_id
  user_name = config.secrets.user_name

  it '#getById() should return a json with the photo data', (done) ->
    photos.getById '3086230', {}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photo')
      done()

  it '#getByUsername() should return a json with photos', (done) ->
    photos.getByUsername user_name, {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getByUserId() should return a json with photos', (done) ->
    photos.getByUserId user_id, {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFavoritesByUsername() should return a json with photos', (done) ->
    photos.getFavoritesByUsername user_name, { 'rpp': 7 }, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFavoritesByUserId() should return a json with photos', (done) ->
    photos.getFavoritesByUserId user_id, {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFriendsByUsername() should return a json with photos', (done) ->
    photos.getFriendsByUsername user_name, {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFriendsByUserId() should return a json with photos', (done) ->
    photos.getFriendsByUserId user_id, {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getPopular() should return a json with photos', (done) ->
    photos.getPopular {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getUpcoming() should return a json with photos', (done) ->
    photos.getUpcoming {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getEditorsChoice() should return a json with photos', (done) ->
    photos.getEditorsChoice {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFreshToday() should return a json with photos', (done) ->
    photos.getFreshToday {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFreshYesterday() should return a json with photos', (done) ->
    photos.getFreshYesterday {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#getFreshWeek() should return a json with photos', (done) ->
    photos.getFreshWeek {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#searchByTag() should return a json with photos', (done) ->
    photos.searchByTag 'hamburg', {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()

  it '#searchByTerm() should return a json with photos', (done) ->
    photos.searchByTerm 'hamburg', {'rpp': 7}, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('photos')
      result.photos.should.have.lengthOf(7)
      done()
