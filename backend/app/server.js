const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const WebSocket = require('ws');

const dbUserData = require('./config/dbUserData');
const {
  initUserController
} = require('./controllers');


const serverPort = 8000;
const wsServerPort = 8080;

const app = express();
const wss = new WebSocket.Server({ port: wsServerPort });
const CLIENTS = [];


wss.on('connection', (ws) => {
  console.log('Client connected. On server ' + wss.clients.size + ' clients');

  CLIENTS.push(socket);

  ws.on('message', (message) => {
    const { data, type } = JSON.parse(message);

    switch (type) {
      case 'pong': {

      }
    }
  });

  ws.on('close', () => {
    console.log('Client Disconnected');

    clearInterval(ping);

    CLIENTS.splice(CLIENTS.indexOf(ws), 1);
  });
  
  ws.on('error', () => {
    clearInterval(ping);

    CLIENTS.splice(CLIENTS.indexOf(ws), 1);
  });

  const ping = setInterval(() => {
    ws.send(JSON.stringify({
      type: 'ping',
      data: 'ping',
    }))
  }, 5000);
});

const sendSocketToAll = (message) => {
  CLIENTS.forEach(client => {
    const isConnected = client.readyState === CLIENTS[0].OPEN;

    isConnected && client.send(JSON.stringify(message));
  });
}


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

const db = mysql.createConnection({
  host: 'localhost',
  database: 'test',
  ...dbUserData,
});

db.connect(err => {
  if (err) return 'Error: ' + err.message;

  console.log('Successfull connect to MySQL Server');
});

// Main Page
app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Web System. All is fine' });
});

app.post('/test-dev-post', (req, res) => {
  return res.status(200).send({ message: null });
})

initUserController(app, db);

app.listen(serverPort, () => {
  console.log('Node app is running on port ' + serverPort);
});
