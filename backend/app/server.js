const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dbUserData = require('./config/dbUserData');
const { initUserController } = require('./controllers');
const { sendSocketToAll } = require('./socket');

const serverPort = 8000;
const app = express();


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
