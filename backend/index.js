const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 8080 });

webSocketServer.on('listening', () => {
    console.log('WebSocket server is listening on port 8080');
});

webSocketServer.on('connection', (webSocket) => {
    webSocket.on('message', (message) => {
        webSocketServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
