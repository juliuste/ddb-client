# `binary(identifier, binaryPathFile)`

Returns a `Promise`. For detailed information about the parameters and responses view [the API docs](https://api.deutsche-digitale-bibliothek.de/doku/display/ADD/binary)

## Example

```js
const ddb = require('ddb-client')('CUSTOM-API-KEY')

ddb.binary('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF', 'mvpr/1.jpg')
.then(…) // Buffer
```
