const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@aircnc-kpq8y.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

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


app.use(express.json());
app.use(routes);


app.listen(3333);