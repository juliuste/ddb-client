# `items(itemID)`

Returns an object that contains the following methods:

- [`aip()`](#aip)
- [`binaries()`](#binaries)
- [`children([opt])`](#childrenopt)
- [`edm()`](#edm)
- [`indexingProfile()`](#indexingProfile)
- [`parents()`](#parents)
- [`source()`](#source)
- [`view()`](#view)

For detailed information about parameters, methods and responses view [the API docs](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/items).

```js
const ddb = require('ddb-client')('CUSTOM-API-KEY')
```

## Methods

### `aip()`

Returns a `Promise`.

#### Example

```js
ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').aip()
.then(…) // Object
```

### `binaries()`

Returns a `Promise`.

#### Example

```js
ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').binaries()
.then(…) // Object
```

### `children([opt])`

Returns a `Promise`. `opt` is an Object that can contain the following key(s):

- `offset`
- `rows`

#### Example

```js
ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').children()
.then(…) // Object
```

### `edm()`

Returns a `Promise`.

#### Example

```js
ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').edm()
.then(…) // Object
```

### `indexingProfile()`

Returns a `Promise`.

#### Example

```js
ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').indexingProfile()
.then(…) // Object
```

### `parents()`

Returns a `Promise`.

#### Example

```js
ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').parents()
.then(…) // Object
```

### `source()`

Returns a `Promise`.

#### Example

```js
ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').source()
.then(…) // Object
```

### `view()`

Returns a `Promise`.

#### Example

```js
ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').view()
.then(…) // Object
```
