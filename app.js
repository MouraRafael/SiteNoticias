// primeira etapa, iniciar o npm
// npm init
// git init
// npm install express         
// npm install --g nodemon     -- reinicia o servidor sempre que a aplicação for alterada e salva
//npm install ejs

    const app = require('./config/server')

// rota home
app.get('/',function(req,res){
    // o O EJS disponibiliza o método render para usar nas respostas das requi
    res.render('home/index'); 
});

//Rota Notícias
app.get('/noticias',function(req,res){
    res.render('noticias/noticias');
})

app.listen(3000,()=>{
    console.log('Servidor rodando com express');
})