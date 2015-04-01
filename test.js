/**
 * is-missing <https://github.com/tunnckoCore/is-missing>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('testit');
var assert = require('assert');
var isMissing = require('./index');

test('is-missing:', function() {
  test('should throw TypeError when `name` is not a string', function(done) {
    function fixture() {
      isMissing([1, 2, 3]);
    }

    assert.throws(fixture, TypeError);
    assert.throws(fixture, /to be string, but array given/);
    done();
  });

  test('should throw TypeError when `callback` is not a function', function(done) {
    function fixture() {
      isMissing('foobar', 'callback');
    }

    assert.throws(fixture, TypeError);
    assert.throws(fixture, /to be function, but string given/);
    done();
  });

  test('should return false if given `name` exist in npm registry', function(done) {
    isMissing('assert-kindof', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, false);
      done();
    });
  });

  test('should return true if given `name` not exist in npm registry', function(done) {
    isMissing('wombat-foo-bar-baz-qux-zero-four', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, true);
      done();
    });
  });

  test('should return false when repository already exists', function(done) {
    isMissing('tunnckoCore/assert-kindof', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, false);
      done();
    });
  });

  test('should return true when repository not exists', function(done) {
    isMissing('mochajs/kjerhkjghkjhhhhhhhhhhhh5kjdsvfsdf', function _cb(err, res) {
      assert.strictEqual(err, null);
      assert.strictEqual(res, true);
      done();
    });
  });
});
