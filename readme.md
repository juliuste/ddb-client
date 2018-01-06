# ddb-client

JavaScript client for the [German digital libary (DDB / Deutsche digitale Bibliothek) API](https://api.deutsche-digitale-bibliothek.de/).

[![npm version](https://img.shields.io/npm/v/ddb-client.svg)](https://www.npmjs.com/package/ddb-client)
[![Build Status](https://travis-ci.org/juliuste/ddb-client.svg?branch=master)](https://travis-ci.org/juliuste/ddb-client)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/ddb-client.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/ddb-client.svg)](https://david-dm.org/juliuste/ddb-client)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/ddb-client.svg)](https://david-dm.org/juliuste/ddb-client#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/ddb-client.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```bash
npm install --save ddb-client
```

## Usage

**You need to provide your own API key which you can obtain after registering [here](https://www.deutsche-digitale-bibliothek.de/user/registration).**

```js
const ddb = require('ddb-client')('YOUR-API-KEY')
```

Following the [official API docs](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/Programmierschnittstelle) the client provides the following methods:

- [`binary(identifier, binaryPathFile)`](docs/binary.md)
- [`entities(query, [opt])`](docs/entities.md)
- [`institutions([opt])`](docs/institutions.md)
- [`items(itemID)`](docs/items.md)
- [`search(query, [opt])`](docs/search.md)

## See also

- [europeana](https://github.com/fvdm/nodejs-europeana) - Inofficial Europeana API client

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/ddb-client/issues).
