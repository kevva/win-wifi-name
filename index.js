'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	var cmd = 'netsh';
	var args = ['wlan', 'show', 'interface'];
	var ret;

	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		ret = /^\s*SSID\s*: (.+)\s*$/gm.exec(stdout);
		ret = ret && ret.length ? ret[1] : null;

		if (!ret) {
			cb(new Error('Could not get SSID'));
			return;
		}

		cb(null, ret);
	});
};
