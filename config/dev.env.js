'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTP: {
    BASE_URL: 'https://api.uneedme.cn/cms/'
  }
})
