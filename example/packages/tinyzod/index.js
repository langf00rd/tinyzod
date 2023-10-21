
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tinyzod.cjs.production.min.js')
} else {
  module.exports = require('./tinyzod.cjs.development.js')
}
