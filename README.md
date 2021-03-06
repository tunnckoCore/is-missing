## [![npm][npmjs-img]][npmjs-url] [![standard style][standard-img]][standard-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Check that given `name` or `user/repo` exists in npm registry or in github as user repository.

## Install
```
npm i is-missing --save
npm test
is-missing --help
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isMissing = require('is-missing')

isMissing('some-no-existing-npm-package-name', function _cb(err, bool) {
  console.log(bool)
  //=> false
})

isMissing('mochajs/mocha', function _cb(err, bool) {
  console.log(bool)
  //=> true
})

isMissing('mochajs/not-existing-repository', function _cb(err, bool) {
  console.log(bool)
  //=> false
})
```


## CLI
> run `is-missing --help` or try this one

```
npm i is-missing -g

is-missing not-existing-npm-package-name

  Aloha, master! How r u today?

  ✔ Oh yes, not-existing-npm-package-name will be yours.

```


## Related
- [abbrev-kindof](https://github.com/tunnckoCore/abbrev-kindof): `kind-of` with single letter abbreviations to javascript native types, like… [more](https://github.com/tunnckoCore/abbrev-kindof)
- [detect-installed](https://github.com/tunnckoCore/detect-installed): Checks that given package name is installed locally (in current… [more](https://github.com/tunnckoCore/detect-installed)
- [get-installed-path](https://github.com/tunnckoCore/get-installed-path): Get the installation path of the given package if it… [more](https://github.com/tunnckoCore/get-installed-path)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system… [more](https://github.com/tunnckoCore/is-installed)
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Thin wrapper around `kind-of` and in bonus functional api.
- [npm-pkgs](https://github.com/tunnckoCore/npm-pkgs): List user npm packages from the [npmjs.com](http://npm.im)
- [online-branch-exist](https://github.com/tunnckoCore/online-branch-exist): Check that given branch/tag/release exist in github repo, using… [more](https://github.com/tunnckoCore/online-branch-exist)


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

[license-url]: https://github.com/tunnckoCore/is-missing/blob/master/LICENSE.md
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

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore/docks) on May 9, 2015._