express = require 'express'
app = express()

app.get '/', (req, res) ->
  message = process.env.POWERED_BY
  if typeof(message) is 'undefined'
    message = 'abc'
  res.send 'response from server side ' + message

# Route: about
app.get '/about', (req, res) ->
  res.send 'about'

app.get '/home', (req, res) ->
# Route: home
  res.send 'home'

# Route: example/one
app.get '/example/one', (req, res) ->
  res.send 'Hello from page ONE'

# Route: example/two
app.get '/example/two', (req, res) ->
  res.send 'Hello from page TWO'

port = process.env.PORT || 8888
server = app.listen port

console.log 'server listening on port %d in %s mode', server.address().port, app.settings.env
