const path = require('path');
const fs 	 = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

let chirpArr = [
	"David - I love my HoneyB",
	"April - David is the best husband ever",
	"Breslynn - I am my daddy's HoneyB",
	"Beckham - I like my mommy best",
	"David - I love my family"
]

chirpArr.forEach(obj => {
	fs.appendFileSync(dataPath, obj + '\n');
});

fs.readFile(dataPath, 'utf8', (err, data) => {
	if (err) console.log(err);
	console.log(data);
});

