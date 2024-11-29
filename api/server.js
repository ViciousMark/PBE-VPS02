const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log('API cantina composição executando em http://localhost:5000');
});