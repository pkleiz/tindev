const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://pkleiz:12931408@cluster0-qfss6.mongodb.net/omnistack8?retryWrites=true&w=majority',{useNewUrlParser:true});

server.use(express.json());
server.use(routes);

server.listen(3333);