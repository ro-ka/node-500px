https = require 'https'

class Request

  constructor: (@consumer_key) ->
    @baseUrl = '/v1/'
    @host = 'api.500px.com'

  get: (url, params = {}, cb) ->
    paramString = ''
    operator = '?'

    params.consumer_key = @consumer_key

    for k, v of params
      if k
        paramString += "#{operator}#{k}=#{v}"
        if operator is '?' then operator = '&'

    https.get { host: @host, path: "#{@baseUrl}#{url}#{paramString}" }, (res) ->
      if res.statusCode and res.statusCode is 200
        chunks = ''
        res.on('data', (resultData) -> chunks += resultData)
        res.on('end', -> cb(null, JSON.parse(chunks)))
      else
        cb(code: res.StatusCode)

    .on('error', cb)

module.exports = Request
