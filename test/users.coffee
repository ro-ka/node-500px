should = require 'should'
config = require './config'
Users  = require '../lib/users'

describe 'Testing GET users:', ->
  users = new Users(config.secrets.consumer_key)
  user_id = config.secrets.user_id
  user_name = config.secrets.user_name
  user_email = config.secrets.user_email

  it '#getById() should return a json with the user data', (done) ->
    users.getById user_id, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('user')
      done()

  it '#getByName() should return a json with the user data', (done) ->
    users.getByName user_name, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('user')
      done()

  it '#getByEmail() should return a json with the user data', (done) ->
    users.getByEmail user_email, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('user')
      done()

  it '#getFriendsById() should return a json with the friends data', (done) ->
    users.getFriendsById user_id, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('friends')
      done()
