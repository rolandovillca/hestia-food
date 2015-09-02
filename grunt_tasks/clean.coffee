###
Clean
Clean files and folders.
###

module.exports =
  server:
    src: [
      'build/server'
      '.tmp'
      '*.log'
    ]

  client:
    src: [
      'build/client'
      '.tmp'
      '*.log'
    ]

  test:
    src: [
      'build/test'
      '.tmp'
      '*.log'
    ]

  all:
    src: [
      'build'
    ]
