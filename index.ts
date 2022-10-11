const { WebhookClient } = require('discord.js');

if (!global.gc) {
	throw new Error(`Did not expose gc`);
}

class SomeClass {
	get hello() {
		return 'Hello'
	}
}

function makeGarbage() {
	for (let i = 0; i < 1_000; i++) {
		new WebhookClient({});
		new SomeClass();
	}
}

function cleanUp() {
	if (global.gc) global.gc();
	require('v8').writeHeapSnapshot();
	process.exit();
}

makeGarbage();
cleanUp();
