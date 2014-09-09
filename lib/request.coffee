https = require 'https'
url   = require 'url'
W     = require 'when'

class Request

  constructor: (@consumer_key) ->
    @pathname = '/v1/'
    @host = 'api.500px.com'

  get: (path, params = {}) ->
    deferred = W.defer()
    params.consumer_key = @consumer_key

    req_url = url.format
      protocol: 'https'
      host: @host
      pathname: "#{@pathname}/#{path}"
      query: params

    https.get req_url, (res) ->
      if res.statusCode and res.statusCode is 200
        chunks = ''
        res.on('data', (data) -> chunks += data)
        res.on('end', -> deferred.resolve(JSON.parse(chunks)))
      else
        deferred.reject(new Error(res))
    .on('error', deferred.reject.bind(deferred))

    return deferred.promise

module.exports = Request
