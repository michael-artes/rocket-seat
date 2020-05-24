const express = require('express');
const routes = express.Router();

routes.get('/', function (req, res) {

    Product.create({
        title: 'React Native',
        description: 'Build com o Reactive Native',
        url: 'https://github.com.br/facebook/react-native'
    });

    return res.send('Hello World Michael!');
});

module.exports = routes;