const webSocket = new WebSocket('ws://localhost:8080');

webSocket.onmessage = (socketMessage) => {
    console.log(socketMessage.data);
    const messageList = document.querySelector('ul');
    messageList.innerHTML += `<li>${socketMessage.data}</li>`;
};

document.querySelector('button').addEventListener('click', () => {
    const messageText = document.querySelector('input').value;
    webSocket.send(messageText);
});