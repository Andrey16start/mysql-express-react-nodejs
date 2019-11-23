const WebSocket = require('ws');

const wsServerPort = 8080;
const wss = new WebSocket.Server({ port: wsServerPort });
const CLIENTS = [];


const logActiveClients = () => {
  console.log('On server ' + wss.clients.size + ' clients');
};
const removeClient = (ws) => {
  const clientIndex = CLIENTS.indexOf(ws);

  if (clientIndex === -1) return;

  CLIENTS.splice(clientIndex, 1);
};

wss.on('connection', (ws) => {
  console.log('Client Connected.');
  logActiveClients();

  CLIENTS.push(ws);

  ws.on('message', (message) => {
    const { data, type } = JSON.parse(message);

    switch (type) {
      case 'pong': {

      }
    }
  });

  ws.on('close', () => {
    console.log('Client Disconnected');
    logActiveClients();

    clearInterval(ping);

    removeClient(ws);
  });

  ws.on('error', () => {
    console.log('Client Disconnected By Error');
    logActiveClients();

    clearInterval(ping);

    removeClient(ws);
  });

  const ping = setInterval(() => {
    ws.send(JSON.stringify({
      type: 'ping',
      data: 'ping',
    }));
  }, 5000);
});

wss.on('error', (err) => {
  console.log('WEBSOCKER SERVER ERROR');
  console.log(err);
});

const sendSocketToAll = (message) => {
  CLIENTS.forEach(client => {
    const isConnected = client.readyState === CLIENTS[0].OPEN;

    isConnected && client.send(JSON.stringify(message));
  });
};

module.exports = {
  sendSocketToAll,
};