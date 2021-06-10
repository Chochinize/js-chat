'use strict'
const express = require('./../../../nodeJS/node-v14.15.4-win-x64/node_modules/express');
const app = express();
app.get('/', (request, response) =>{
	response.send('Hallo dasdasdasdas');
    console.log('clear');
});
let server =  app.listen(8080, ()=>{
	let port = server.address().port;
	console.log("server is here and lauft under: http://localhost::%", port);
    console.log(321);
});