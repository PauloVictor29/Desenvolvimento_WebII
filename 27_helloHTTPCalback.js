//cARREGA O Módulo HTTP
const http = require('http');

//Função de callback para o servidor HTTP
var callback = function(request,response){

    //Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-type": "text/plain"});

    //Mensagem de retorno
    response.end("Ola Mundo Node! \n");
};
//Servidor HTTP
var server = http.createServer(callback);

//Porta que o servidor vai executar
server.listen(3000);

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado ...");