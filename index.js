/**
 * is-missing <https://github.com/tunnckoCore/is-missing>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var got = require('gh-got')
var fmt = require('util').format
var is = require('assert-kindof')
var re = require('github-short-url-regex')

var npmjs = 'https://www.npmjs.com/package/'

module.exports = function isMissing (name, opts, callback) {
  is.string(name)
  if (!callback && typeof opts === 'function') {
    callback = opts
    opts = {}
  }
  opts = is.kindof.object(opts) ? opts : {}
  is.function(callback)

  var user = ''
  var regex = re()

  if (regex.test(name)) {
    var match = regex.exec(name)
    user = match[1]
    name = match[2]
  }

  var url = user.length
    ? fmt('repos/%s/%s', user, name)
    : name

  opts.endpoint = user.length ? false : npmjs

  got.get(url, opts, function _callback (err) {
    if (err && err.code === 404) {
      callback(null, true)
      return
    }
    callback(null, false)
  })
}
