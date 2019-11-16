const WebSocket = require('ws');
const fs = require('fs');
const http = require('http');
const parseString = require('xml2js').parseString;


class Main {

    constructor() {
        this.socket();
    }

    socket() {
        var json = this.test();
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
            ws.send(json);
        })
    }

    test() {
        http.get('http://api.sfl.ch/xml/teamdetail/hash/df323763af6c70ccc39545bc6f50fdc5/teamxid/52591/',
            (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    parseString(data, function (err, result) {
                        console.log(JSON.stringify(result));
                        return JSON.stringify(result);
                    });
                });
            })
    }
}

const server = new Main();
