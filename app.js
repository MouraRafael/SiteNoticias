// primeira etapa, iniciar o npm
// npm init
// git init
// npm install express         
// npm install --g nodemon     -- reinicia o servidor sempre que a aplicação for alterada e salva
//npm install ejs

const express = require('express');
const app = express();

// Define o motor de viows como o EJS
app.set('view engine', 'ejs');

// Configurar o caminho da pasta views
app.set('views','./app/views');

// rota home
app.get('/',function(req,res){
    // o O EJS disponibiliza o método render para usar nas respostas das requi
    res.render('home/index'); 
});


app.get('/noticias',function(req,res){
    res.render('noticias/noticias')
})

app.listen(3000,()=>{
    console.log('Servidor rodando com express')
})