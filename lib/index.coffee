Photos = require './photos'
Users  = require './users'
Blogs  = require './blogs'

class API

  constructor: (consumer_key) ->
    @photos = new Photos(consumer_key)
    @users = new Users(consumer_key)
    @blogs = new Blogs(consumer_key)

module.exports = API
