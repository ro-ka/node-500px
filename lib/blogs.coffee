Request = require './request'

class Blogs

  constructor: (consumer_key) ->
    @request = new Request(consumer_key)

  getById: (id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    @request.get("blogs/#{id}", params, cb)

  getCommentsById: (id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    @request.get("blogs/#{id}/comments", params, cb)

  getFresh: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'fresh'
    @request.get('blogs', params, cb)

  getByUsername: (username, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user'
    params.username = username
    @request.get('blogs', params, cb)

  getByUserId: (user_id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user'
    params.user_id = user_id
    @request.get('blogs', params, cb)

module.exports = Blogs
