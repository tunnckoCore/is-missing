## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Check that given `name` or `user/repo` exists in npm registry or in github as organization/user repository.

## Install
```
npm i --save is-missing
npm test
is-missing --help
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isMissing = require('is-missing');

isMissing('some-no-existing-npm-package-name', function _cb(err, bool) {
  console.log(bool);
  //=> false
});

isMissing('mochajs/mocha', function _cb(err, bool) {
  console.log(bool);
  //=> true
});

isMissing('mochajs/not-existing-repository', function _cb(err, bool) {
  console.log(bool);
  //=> false
});
```


## CLI
> run `is-missing --help` or try this one

```
npm i -g is-missing

is-missing not-existing-npm-package-name

  Aloha, master! How r u today?

  ✔ Oh yes, not-existing-npm-package-name will be yours.

```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/is-missing
[npmjs-img]: https://img.shields.io/npm/v/is-missing.svg?style=flat&label=is-missing

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-missing?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-missing.svg?style=flat

[license-url]: https://github.com/tunnckoCore/is-missing/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/is-missing
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-missing.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/is-missing
[daviddm-img]: https://img.shields.io/david/tunnckoCore/is-missing.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/is-missing/graphs/contributors

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore), April 1, 2015_