const WebSocket = require('ws');

const wsServerPort = 8080;
const CLIENTS = [];

const wss = new WebSocket.Server({ port: wsServerPort });

module.exports = (ACTIVE_TOKENS) => {
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

      console.log('Websocket Event. Message');
      console.log('type: ', type, '\ndata: ', data);

      switch (type) {
        case 'pong': {
          const isActive = ACTIVE_TOKENS.includes(data);

          if (!isActive) {
            ws.close();
            clearInterval(ping);
          }

          clearTimeout(userAnswerTimer);
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

    let userAnswerTimer;

    const ping = setInterval(() => {
      ws.send(JSON.stringify({
        type: 'ping',
        data: 'ping',
      }));

      userAnswerTimer = setTimeout(() => {
        ws.close();
        clearInterval(ping);
      }, 5001);

    }, 5000);
  });

  wss.on('error', (err) => {
    console.log('WEBSOCKET SERVER ERROR');
    console.log(err);
  });

  const sendSocketToAll = (message) => {
    CLIENTS.forEach(client => {
      const isConnected = client.readyState === CLIENTS[0].OPEN;

      isConnected && client.send(JSON.stringify(message));
    });
  };
}