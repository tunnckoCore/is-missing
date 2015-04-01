/**
 * is-missing <https://github.com/tunnckoCore/is-missing>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';


var assert = require('assert');
var isMissing = require('./index');

describe('is-missing:', function() {
  it('should throw TypeError when `name` is not a string', function(done) {
    assert.throws(function _fixture() {
      isMissing([1, 2, 3]);
    }, TypeError);
    assert.throws(function _fixture() {
      isMissing([1, 2, 3]);
    }, /to be string, but array given/);
    done();
  });

  it('should throw TypeError when `callback` is not a function', function(done) {
    assert.throws(function _fixture() {
      isMissing('foobar', 'callback');
    }, TypeError);
    assert.throws(function _fixture() {
      isMissing('foobar', 'callback');
    }, /to be function, but string given/);
    done();
  });

  it('should return true if given `name` exist in npm registry', function(done) {
    isMissing('assert-kindof', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, true);
      done();
    });
  });

  it('should return false if given `name` exist in npm registry', function(done) {
    isMissing('wombat-foo-bar-baz-qux-zero-four', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, false);
      done();
    });
  });

  it('should return true when `user/repo` given (checks github)', function(done) {
    isMissing('tunnckoCore/assert-kindof', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, true);
      done();
    });
  });

  it('should return false when `user/repo` given (checks github)', function(done) {
    isMissing('tunnckoCore/foo-bar-baz-qux', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, false);
      done();
    });
  });
});
