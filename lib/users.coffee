Request = require './request'

class Users

  constructor: (consumer_key) ->
    @request = new Request(consumer_key)

  getById: (id, params = {}, cb) ->
    params.id = id
    @request.get('users/show', params, cb)

  getByName: (username, params = {}, cb) ->
    params.username = username
    @request.get('users/show', params, cb)

  getByEmail: (email, params = {}, cb) ->
    params.email = email
    @request.get('users/show', params, cb)

  getFriendsById: (id, params = {}, cb) ->
    @request.get("users/#{id}/friends", params, cb)

module.exports = Users
