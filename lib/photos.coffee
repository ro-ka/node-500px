Request = require './request'

class Photos

  constructor: (consumer_key) ->
    @request = new Request(consumer_key)

  getById: (photo_id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    @request.get("photos/#{photo_id}", params, cb);

  getByUsername: (username, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user'
    params.username = username
    @request.get('photos', params, cb)

  getByUserId: (user_id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user'
    params.user_id = user_id
    @request.get('photos', params, cb)

  getFavoritesByUsername: (username, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user_favorites'
    params.username = username
    @request.get('photos', params, cb)

  getFavoritesByUserId: (user_id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user_favorites'
    params.user_id = user_id
    @request.get('photos', params, cb)

  getFriendsByUsername: (username, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user_friends'
    params.username = username
    @request.get('photos', params, cb)

  getFriendsByUserId: (user_id, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'user_friends'
    params.user_id = user_id
    @request.get('photos', params, cb)

  getPopular: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'popular'
    @request.get('photos', params, cb)

  getUpcoming: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'upcoming'
    @request.get('photos', params, cb)

  getEditorsChoice: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'editors'
    @request.get('photos', params, cb)

  getFreshToday: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'fresh_today'
    @request.get('photos', params, cb)

  getFreshYesterday: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'fresh_yesterday'
    @request.get('photos', params, cb)

  getFreshWeek: (params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.feature = 'fresh_week'
    @request.get('photos', params, cb)

  searchByTag: (tag, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.tag = tag
    @request.get('photos/search', params, cb)

  searchByTerm: (term, params = {}, cb) ->
    if typeof params is 'function' then cb = params; params = {}
    params.term = term
    @request.get('photos/search', params, cb)

module.exports = Photos
