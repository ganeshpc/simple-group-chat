const webSocket = new WebSocket('ws://localhost:8080');

webSocket.onmessage = (socketMessage) => {
    console.log(socketMessage.data);
};

document.querySelector('button').addEventListener('click', () => {
    webSocket.send('Hello, server!');
});