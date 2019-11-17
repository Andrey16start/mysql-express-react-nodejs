const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dbUserData = require('./config/dbUserData'); // TODO: Add to .gitignore
const {
  initUserController
} = require('./controllers');

const app = express();
const serverPort = 8000;

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
  return res.status(200).send({ message: 'Social Network WEB Api. \n All is fine' });
});

initUserController(app, db);

app.listen(serverPort, () => {
  console.log('Node app is running on port ' + serverPort);
});