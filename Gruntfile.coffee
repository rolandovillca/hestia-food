module.exports = (grunt) ->
  gruntLoader = require 'load-grunt-config'
  executionTime = require 'time-grunt'
  path = require 'path'

  executionTime grunt
  gruntLoader grunt,

    configPath: path.join process.cwd(), 'grunt_tasks'

    loadGruntTasks:
      config: require './package.json'
      scope: 'devDependencies'
