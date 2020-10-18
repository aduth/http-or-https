# http-or-https

Automatically use the `http` or `https` function appropriate to the given parameter.

Supports:

- `get` ([`http` documentation](https://nodejs.org/api/http.html#http_http_get_options_callback), [`https` documentation](https://nodejs.org/api/https.html#https_https_get_options_callback))
- `request` ([`http` documentation](https://nodejs.org/api/http.html#http_http_request_options_callback), [`https` documentation](https://nodejs.org/api/https.html#https_https_request_options_callback))

## Example

```js
import { get } from 'http-or-https';

get('https://example.com', (response) => {
	/* ... */
});

get('http://example.com', (response) => {
	/* ... */
});
```

## Installation

`http-or-https` is authored as an [ESM module](https://nodejs.org/api/esm.html), and therefore requires Node 12.0 or newer.

Install using NPM or Yarn:

```
npm install http-or-https
```

```
yarn add http-or-https
```

## License

Copyright 2020 Andrew Duthie

Released under the MIT License. See [LICENSE.md](./LICENSE.md).
