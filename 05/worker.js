importScripts("md5.js");

var MAX = 100000000;

onmessage = function(e) {
	var i = 0,
		input = e.data[0];
	while (i++ < MAX) {
		let h = md5(input + i);
		
		// Part 1
		/*if (h.toString("hex").substr(0, 5) == "00000") {
			postMessage([i, h, h[5]]);
		}*/
		
		// Part 2
		if (h.toString("hex").substr(0, 5) == "00000") {
			let p = parseInt(h[5]);
			if (p !== NaN && p >= 0 && p < 8) {
				postMessage([i, h, h[6], p]);
			}
		}
	}
};