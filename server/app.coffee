express = require 'express'
app = express()

app.get '/', (req, res) ->
  message = process.env.POWERED_BY
  if typeof(message) is 'undefined'
    message = 'abc'
  res.send 'response from server side ' + message

port = process.env.PORT || 8888
server = app.listen port

console.log 'server listening on port %d in %s mode', server.address().port, app.settings.env
