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
    src: ['server/**/*.coffee']
    dest: 'build/'
    rename: (dest, src) ->
      folder = src.substring 0, src.lastIndexOf '/'
      filename = src.substring src.lastIndexOf '/', src.length
      filename = filename.substring 0, filename.lastIndexOf '.'
      dest + folder + filename + '.js'

  test:
    files: [
      expand: true
      cwd: 'test/'
      src: ['e2e/**/*.coffee', 'integration/**/*.coffee']
      dest: 'build/test/'
      ext: '.js'
      extDot: 'first'
    ]
