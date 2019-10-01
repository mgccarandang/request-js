const request = require('request')

request(
	'http://localhost:3000/',
	{
		method: "POST",
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({ someSTring: 'hello', someArray: ['hello', 'world'] })
	})
  
 // By setting the the content-type header to application/json the client interprets the response as JSON
 // Request JS API reference: https://github.com/request/request#forms
