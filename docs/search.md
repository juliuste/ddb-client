# `search(query, [opt])`

Returns a `Promise`. `opt` is an Object that can contain the following key(s):

- `facet` (since this is a repeatable GET parameter in the API, you need to provide an `array` of `facet` `string`s)
- `<facet_name>` (since this is a repeatable GET parameter in the API, you need to provide an `array` of `<facet_name>` `string`s)
- `facet.limit`
- `minDocs`
- `offset`
- `rows`
- `sort`

For detailed information about the parameters and responses view [the API docs](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/search).

## Example

```js
const ddb = require('ddb-client')('CUSTOM-API-KEY')

ddb.search('*:*', {rows: 12})
.then(…) // Object
```
