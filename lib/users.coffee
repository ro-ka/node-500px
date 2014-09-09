Request = require './request'

class Users

  constructor: (consumer_key) ->
    @request = new Request(consumer_key)

  getById: (id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.id = id
    @request.get('users/show', params, cb)

  getByName: (username, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.username = username
    @request.get('users/show', params, cb)

  getByEmail: (email, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.email = email
    @request.get('users/show', params, cb)

  getFriendsById: (id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    @request.get("users/#{id}/friends", params, cb)

module.exports = Users
