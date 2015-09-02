###
List of main tasks.
###

module.exports =
  server: [
    'clean:server'
    'coffee:server'
  ]

  client: [
    'clean:client'
    'coffee:client'
  ]

  dev: [
    'server'
    #'client'
  ]

  build: [
    'server'
    'client'
  ]
