
# lodash-traits ![npm (scoped)](https://img.shields.io/npm/v/lodash-traits.svg?style=popout) ![NpmLicense](https://img.shields.io/npm/l/lodash-traits.svg?style=popout) ![David](https://img.shields.io/david/peoro/lodash-traits.svg?style=popout)  ![Travis (.com)](https://img.shields.io/travis/com/peoro/lodash-traits.svg?style=popout) ![Coveralls github](https://img.shields.io/coveralls/github/peoro/lodash-traits.svg?style=popout)

> Traits for [lodash](https://lodash.com/)

This module exposes a trait set with all the functions from lodash.
It's mainly meant to be used with [straits](https://straits.github.io/).

## Installation

```bash
npm install --save lodash-traits
```

## Usage

All the lodash functions are exposed as traits.

You can use them with the [straits syntax](https://straits.github.io/syntax/):

```javascript
const lodashTraits = require('lodash-traits');
use traits * from lodashTraits;

const object = { a:7, b:12, c:4, d:7, e:1 };
const result = object
	.*values()
	.*sortBy()
	.*uniq();
// result: [1, 4, 7, 12]
```

or by explicitly using symbol properties or free functions. Give a look at [`test/index.js`](https://github.com/peoro/lodash-traits/blob/master/test/index.js) for more examples.
