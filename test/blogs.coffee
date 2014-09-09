should = require 'should'
config = require './config'
Blogs  = require '../lib/blogs'

describe 'Testing GET blogs:', ->
  blogs = new Blogs(config.secrets.consumer_key)
  user_id = config.secrets.user_id
  user_name = config.secrets.user_name

  it '#getById() should return a json with the blog data', (done) ->
    blogs.getById 27105, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('body')
      done()

  it '#getCommentsById() should return a json with the blog comments', (done) ->
    blogs.getCommentsById 1704, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('comments')
      done()

  it '#getFresh() should return a json with the freshest blogs data', (done) ->
    blogs.getFresh { 'rpp': '10' }, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('blog_posts')
      result.blog_posts.should.have.lengthOf(10)
      done()

  it '#getByUsername() should return a json with the blog data', (done) ->
    blogs.getByUsername user_name, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('blog_posts')
      done()

  it '#getByUserId() should return a json with the blog data', (done) ->
    blogs.getByUserId user_id, (err, result) ->
      should.not.exist(err)
      should.exist(result)
      result.should.have.property('blog_posts')
      done()
