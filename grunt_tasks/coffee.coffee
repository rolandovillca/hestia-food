###
Coffee
Compile CoffeeScript files to JavaScript.
###

module.exports =
  options:
    separator: 'linefeed'
    bare: true
    join: false
    sourceMap: false

  server:
    expand: true
    flatten: false
    cwd: 'server/'
    src: ['**/*.coffee']
    dest: 'build/server'
    ext: '.js'

  client:
    expand: true
    flatten: false
    cwd: 'client/'
    src: ['**/*.coffee']
    dest: 'build/client'
    ext: '.js'

  test:
    files: [
      expand: true
      cwd: 'test/'
      src: ['e2e/**/*.coffee', 'integration/**/*.coffee']
      dest: 'build/test/'
      ext: '.js'
      extDot: 'first'
    ]
