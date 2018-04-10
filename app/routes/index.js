module.exports = function(application){
    application.get('/', function(req, res){//Ao solicitar acesso a index, faça:
        res.send('Olá Mundo');//Send envia um texto a página solicitante, Resend encaminha para uma nova página
    })
}