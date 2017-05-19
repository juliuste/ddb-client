# `institutions([opt])`

Returns a `Promise`. `opt` is an Object that can contain the following key(s):

- `sector` (since this is a repeatable GET parameter in the API, you need to provide an `array` of [`sector` `string`s](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/Sparte))

For detailed information about the parameters and responses view [the API docs](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/institutions).

## Example

```js
const ddb = require('ddb-client')('CUSTOM-API-KEY')

ddb.institutions({sector: ['sec_01', 'sec_05']})
.then(…) // Array
```
