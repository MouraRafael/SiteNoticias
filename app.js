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
    res.send(
        `<html> 
            <head>
                <meta charset="UTF-8">
                <title> Portal de Notícias</title>
                <body>
                    <a href="/noticias">Notícias</a>
                    <h1>Portal de Notícias</h1>
                <body>
            </head> 
        </html>`
    )
});


app.get('/noticias',function(req,res){
    res.send(`<html> 
    <head>
        <meta charset="UTF-8">
        <title> Portal de Notícias</title>
        <body>
            <a href="/">Home</a>
            <h1>Todas as Notícias</h1>
            <ul>
                <li><a href="#">Servidor NODE.JS com Express</li>    
                <li><a href="#">NODEMON melhora a performance do desenvolvedor NODE.JS</li>    
            </ul>
        <body>
    </head> 
</html>`)
})

app.listen(3000,()=>{
    console.log('Servidor rodando com express')
})