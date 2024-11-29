const express = require('express');
const routes = express.Router();
const Clientes = require('./controllers/controller_clientes.js');
const Fornecedores = require('./controllers/controller_fornecedores.js');
const Pedidos = require('./controllers/controller_pedidos.js');
const Produtos = require('./controllers/controller_produtos.js');
const Telefone = require('./controllers/controller_telefone.js');

routes.get('/', (req, res) => {
    return res.json({ massage: 'API cantina composição executando'});
});

routes.post('/clientes', Clientes.create);
routes.get('/clientes', Clientes.read);
routes.put('/clientes', Clientes.update);
routes.delete('/clientes', Clientes.del);

routes.post('/fornecedores', Fornecedores.create);
routes.get('/fornecedores', Fornecedores.read);
routes.put('/fornecedores', Fornecedores.update);
routes.delete('/fornecedores', Fornecedores.del);

routes.post('/pedidos', Pedidos.create);
routes.get('/pedidos', Pedidos.read);
routes.put('/pedidos', Pedidos.update);
routes.delete('/pedidos', Pedidos.del);

routes.post('/produtos', Produtos.create);
routes.get('/produtos', Produtos.read);
routes.put('/produtos', Produtos.update);
routes.delete('/produtos', Produtos.del);

routes.post('/telefone', Telefone.create);
routes.get('/telefone', Telefone.read);
routes.put('/telefone', Telefone.update);
routes.delete('/telefone', Telefone.del);

module.exports = routes;