# promised-map
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
const EventEmitter = require('events');
const PromisedMap = require('promised-map');

const emitter = new EventEmitter();
const map = new PromisedMap();

async function sendRequestAndWaitResponse(request) {
  emitter.dispatch(request);
  await map.wait(request.id);
}

emitter.on('response', response => map.resolve(response.id, response));

sendRequestAndWaitResponse({id: '1', payload: 'foo'}); // => resolves when response arrives

```

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
