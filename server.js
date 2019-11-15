const WebSocket = require('ws');
const fs = require('fs');
const ApiController = require('./apiController');



class Main {

	constructor() {
    this.socket();
  }
  
	socket() {
    const apiController = new ApiController();
    apiController.test();

		const wss = new WebSocket.Server({
			port: 8080
		});

		wss.on('connection', (ws) => {

			let rawdata = fs.readFileSync('livedata/nextGoal.json');
			let student = JSON.parse(rawdata);
			// WS Sample Method
			ws.on('message', (message) => {
				console.log(`Received message => ${message}`);

			});
			ws.send('ho!');
		})
	}
}

const server = new Main();