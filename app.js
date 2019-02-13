const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoConn = require('./db/mongoConnection')();
const errorHandler=require('./helpers/errorHandler');
let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the APIs specific to version
app.use('/api/v1', require('./api/v1'));
// app.use(require('./api/v1'));

app.use(errorHandler)

module.exports = app;
