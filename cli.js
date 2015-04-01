#!/usr/bin/env node
/**
 * is-missing <https://github.com/tunnckoCore/is-missing>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('assert-kindof');
var meow = require('meow');
var chalk = require('chalk');
var isMissing = require('./index');
var multiline = require('multiline');
var log = require('log-symbols');
var exit = process.exit;

var cli = meow({
  help: chalk.gray(multiline.stripIndent(function() {/*
    Options
      --help        show this help
      --version     current version

    Usage
      is-missing [name]

    Example
      is-missing not-exisiting-npm-package-name
      is-missing mochajs/mocha
  */}))
});

if (is.kindof.array(cli.input) && !cli.input.length) {
  console.error();
  console.error(chalk.red('  Whoaaa!'));
  console.error();
  console.error('  %s %s', log.error, chalk.red('You should give a name or user/repo.'));
  console.error('  %s %s', log.info, chalk.blue('Try to run:'), chalk.gray('is-missing mochajs/mocha'));
  console.error();
  exit(1);
}

console.log();
console.log(chalk.green('  Aloha, master! How r u today?'));
console.log();

var name = String(cli.input[0]);

isMissing(name, function _cb(err, bool) {
  if (!is.kindof.null(err)) {
    console.error('  %s %s', log.error, chalk.red(err.message));
    console.error();
    exit(1);
  }
  var yes = chalk.gray('Oh yes, ' + chalk.bold(name) + ' will be yours.');
  var doh = chalk.gray('Sorry, ' + chalk.bold(name) + ' already exists.');

  var state = bool ? doh : yes;
  var icon = bool ? log.error : log.success;

  console.log('  %s %s', icon, state);
  console.log();
  exit(0);
});
