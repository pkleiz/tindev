const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://pkleiz:A12931408a@cluster0-qfss6.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);