const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./connection.js');
const employeeController = require('./controllers/employeeController');
const cors = require('cors');


var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.listen(3000, () => console.log('Express.js is listening to port 3000'));
app.use('/employee', employeeController);