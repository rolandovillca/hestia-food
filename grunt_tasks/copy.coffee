###
Copy
Copy files and folders.
###

module.exports =
  server:
    files: [
      expand: true
      dot: true
      cwd: 'server'
      dest: 'build/server/'
      src: [
        '**/*'
        '!**/*.coffee'
      ]
      filter: 'isFile'
    ]
