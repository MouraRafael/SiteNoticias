// primeira etapa, iniciar o npm
// npm init
// git init
// npm install express         
// npm install --g nodemon     -- reinicia o servidor sempre que a aplicação for alterada e salva
//npm install ejs

    const app = require('./config/server')
    const noticias = require('./mockup') //require do mockup com json dentro

// rota home
app.get('/',function(req,res){
    // o O EJS disponibiliza o método render para usar nas respostas das requi
    res.render('home/index',{noticias: noticias.slice(0,3)}); // Para mostrar apenas as três primeiras notícias, começando daqulea de id 2
});

//Rota Notícias
app.get('/noticias',function(req,res){
    res.render('noticias/noticias',{noticias: noticias}); //além do arquivo ejs ('noticias/noticias'), será passada uma variável com o conteúdo do arquivo mockup para que possamos trabalhar com esses valores na página
})
//Rota Notícia
app.get('/noticia',function(req,res){
    // recupera id noticia por get
    const id = req.query.id
    res.render('noticias/noticia',{noticia: noticias[id]})
})
//Rota Admin, adicionar Notícias
app.get('/admin',function(req,res){
    res.render('admin/form_add_noticias')
})

app.listen(3000,()=>{
    console.log('Servidor rodando com express');
})