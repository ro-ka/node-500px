https = require 'https'
url   = require 'url'

class Request

  constructor: (@consumer_key) ->
    @pathname = '/v1/'
    @host = 'api.500px.com'

  get: (path, params = {}, cb) ->
    params.consumer_key = @consumer_key

    req_url = url.format
      protocol: 'https'
      host: @host
      pathname: "#{@pathname}/#{path}"
      query: params

    https.get req_url, (res) ->
      if res.statusCode and res.statusCode is 200
        chunks = ''
        res.on('data', (resultData) -> chunks += resultData)
        res.on('end', -> cb(null, JSON.parse(chunks)))
      else
        cb(code: res.StatusCode)

    .on('error', cb)

module.exports = Request
