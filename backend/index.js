const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8080 });

webSocketServer.on('listening', () => {
    console.log('WebSocket server is listening on port 8080');
});

webSocketServer.on('connection', (webSocket) => {
    console.log('User connected');

    webSocket.on('message', (message) => {
        console.log(message);
        webSocket.send(message);
    });
});
