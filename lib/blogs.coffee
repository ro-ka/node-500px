Request = require './request'

class Blogs

  constructor: (consumer_key) ->
    @request = new Request(consumer_key)

  getById: (id, params = {}) ->
    @request.get("blogs/#{id}", params)

  getCommentsById: (id, params = {}) ->
    @request.get("blogs/#{id}/comments", params)

  getFresh: (params = {}, cb) ->
    params.feature = 'fresh'
    @request.get('blogs', params)

  getByUsername: (username, params = {}) ->
    params.feature = 'user'
    params.username = username
    @request.get('blogs', params)

  getByUserId: (user_id, params = {}) ->
    params.feature = 'user'
    params.user_id = user_id
    @request.get('blogs', params)

module.exports = Blogs
