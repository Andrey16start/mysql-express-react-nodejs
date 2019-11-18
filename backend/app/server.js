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
let WS; // TODO: WS must be object


wss.on('connection', (socket) => {
  console.log('on server ' + wss.clients.size + ' clients');
  WS = socket; // TODO: WS[jwn_token] = socket. socket is socket for current connected user

  WS.on('message', (message) => {
    const { data, type } = JSON.parse(message);

    switch (type) {
      case 'pong': {

      }
    }
  });

  WS.on('close', () => {
    clearImmediate(ping);
  });

  const ping = setInterval(() => {
    WS.send(JSON.stringify({
      type: 'ping',
      data: 'ping',
    }))
  }, 5000);
});


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