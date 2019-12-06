const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv/config');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);


mongoose.connect(process.env.MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

    app.use((req, res, next) => {
        req.io = io;
        req.connectedUsers = connectedUsers;

        return next();
    });

/**
 * primeiro parametro: rota do usuario
 * rotas sempre em ingles e no plural
 * 
 * param: function (req,res)
 * no req está qqer tipo de parametro q o usuario envia na requisição
 * res devolve resposta pra requisição
 */

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edicao e  delete)
// req.body = Acessar corpo da requisição ( para criação, edição de registros)

//app.use(cors({ origin: 'http://localhost:3333' })); // define endereço especifico para acessar api
app.use(cors()); // qqer aplicação pode acessar a api
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


server.listen(3333);