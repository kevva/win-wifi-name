# win-wifi-name [![Build Status](https://travis-ci.org/kevva/win-wifi-name.svg?branch=master)](https://travis-ci.org/kevva/win-wifi-name)

> Get current wifi name on Windows


## Install

```
$ npm install --save win-wifi-name
```


## Usage

```js
var winWifiName = require('wifi-name');

winWifiName(function (err, name) {
	console.log(name);
	//=> 'wu-tang lan'
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
