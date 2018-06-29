const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

//My controller functions file
const controller = require('./controller.js');

const port = process.env.PORT;

//Set up Massive to connect Express server to database
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
    console.log(process.env.CONNECTION_STRING)
  }).catch( err => console.log(err) );

app.get('/house_list', controller.get_houses);
app.get('/house/:id', controller.get_house);
app.post('/house', controller.create);






app.listen(port, () => {
    console.log("Server listening on port " + port)
});