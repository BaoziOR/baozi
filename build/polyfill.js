/**
 * 解决浏览器中不能用promise和object-assign问题
 */
require('es6-promise').polyfill()
Object.assign = require('object-assign')
