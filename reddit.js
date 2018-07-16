const reqpro = require('request-promise'),
			path 	 = require('path'),
			fs 		 = require('fs');

const dataPath = path.join(__dirname, '/popular-articles.json');
console.log(dataPath);

reqpro('https://reddit.com/r/popular.json')
	.then((res) => {
		let parsedRes = JSON.parse(res);
		let articles = parsedRes.data.children.map(item => {
			return ({
				title: item.data.title,
				url: item.data.url,
				author: item.data.author
			});
		});

		let redditArr = JSON.stringify(articles);
		fs.writeFile(dataPath, redditArr, (err) => {
			console.log(err);
		})
	})
	.catch((err) => {
		console.log(err);
	});
