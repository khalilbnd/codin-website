const express = require('express');
const http = require('http')
const path = require('path')
const notifier = require('node-notifier');


const configRouter = require('./router/config');
const authRouter = require('./router/auth')
const UserModel = require('./model/User/UserModel')


require('dotenv').config();
const app = express();

const {WEBSITE_PORT} = process.env

app.use(express.json());

app.use(configRouter);
app.use(authRouter);

const server = http.createServer(app)

server.listen(WEBSITE_PORT, () => {
    notifier.notify({

        title: 'Codin',
        message: `Server listening on port ${WEBSITE_PORT}`,
        icon: path.join(__dirname, 'logo.jpg'),
        sound: true,
        wait: true,
    })
});





