const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');


app.use('/api', require('./src/routes.js'));

app.listen(3000, () => console.log('Exemple app listening on port 3000!'));