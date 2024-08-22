const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8080 });

webSocketServer.on('connection', (webSocket) => {
    console.log('User connected');

    webSocket.on('message', (message) => {
        console.log(message);
        webSocket.send(message);
    });
});
