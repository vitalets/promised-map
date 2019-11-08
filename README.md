# promised-map
[![Actions Status](https://github.com/vitalets/promised-map/workflows/autotests/badge.svg)](https://github.com/vitalets/promised-map/actions)
[![npm](https://img.shields.io/npm/v/promised-map.svg)](https://www.npmjs.com/package/promised-map)
[![license](https://img.shields.io/npm/l/promised-map.svg)](https://www.npmjs.com/package/promised-map)

A map of promises that can be resolved or rejected by key.

## Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- tocstop -->

## Installation
```bash
npm install promised-map
```

## Usage
```js
const PromisedMap = require('promised-map');

const map = new PromisedMap();

const promise = map.wait('foo');

// resolve by key
map.resolve('foo', 42);

// reject by key
map.reject('foo', new Error('error'));

// check is promise still pending
map.has('foo');
```

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
