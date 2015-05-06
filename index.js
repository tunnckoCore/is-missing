/**
 * is-missing <https://github.com/tunnckoCore/is-missing>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var got = require('got')
var fmt = require('util').format
var is = require('assert-kindof')
var re = require('github-short-url-regex')

var github = 'https://api.github.com/repos/'
var npm = 'https://www.npmjs.com/package/'

module.exports = function isMissing (name, callback) {
  is.string(name)
  is.function(callback)

  var user = ''

  if (re().test(name)) {
    var match = re().exec(name)
    user = match[1]
    name = match[2]
  }

  var url = user.length
    ? fmt('%s%s/%s', github, user, name)
    : fmt('%s%s', npm, name)

  got.get(url, function _callback (err) {
    if (err && err.code === 404) {
      callback(null, true)
      return
    }
    callback(null, false)
  })
}
