const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-msjwx.mongodb.net/wweek10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex :  true,
});

// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors()); // Vai liberar acesso externo para todo tipo de aplicação
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

/**
 * Tipos de parâmetros:
 * Query Params: request.query (Filtros, ordenação, paginação, ...)
 * Routes Params: request.params (Identificar um recurso na alteração ou remoção)
 * Body: resquest.body (Dados para criação ou alteração de um registro)
 */

 //MongoDB (Não-relacional)

server.listen(3333);