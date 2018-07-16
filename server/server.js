const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

let chirpArr = [
	{
		name: 'David',
		chirp: 'I love my HoneyB'
	},
	{
		name: 'April',
		chirp: 'David is the best husband ever'
	},
	{
		name: 'Breslynn',
		chirp: "I am my daddy's HoneyB"
	},
	{
		name: 'Beckham',
		chirp: 'I like my mommy best'
	},
	{
		name: 'David',
		chirp: 'I love my family'
	}
];

// chirpArr.forEach(obj => {
// 	fs.appendFileSync(dataPath, obj + '\n');
// });

let data = JSON.stringify(chirpArr);

fs.appendFileSync(dataPath, data, err => {
	console.log(err);
});

fs.readFile(dataPath, 'utf8', (err, data) => {
	if (err) console.log(err);
	console.log(data);
});
