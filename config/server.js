// Módulo de configuração do app
const express = require('express');
const app = express();

// Define o motor de viows como o EJS
app.set('view engine', 'ejs');

// Configurar o caminho da pasta views
app.set('views','./app/views');

module.exports = app