[![Build Status](https://travis-ci.org/mgjam/nodejs-modules-failable-result.svg?branch=master)](https://travis-ci.org/mgjam/nodejs-modules-failable-result) [![Coverage Status](https://coveralls.io/repos/github/mgjam/nodejs-modules-failable-result/badge.svg?branch=master)](https://coveralls.io/github/mgjam/nodejs-modules-failable-result?branch=master)
# failable-result
Lightweight module to represent failable result

## Installation
```sh
npm install failable-result
```

## Test
```sh
npm run test
```

## Usage [JS]
```js
const lib = require("failable-result");

const fun = b => b ? lib.default.createResult(b) : lib.default.createFailure(b);

[fun(true), fun(false)].forEach(x => x.handle(
    result => console.log(`result: [${result}]`),
    failure => console.error(`failure: [${failure}]`)
));

/* ***Output***
 * result: [true]
 * failure: [false]
 * /
```