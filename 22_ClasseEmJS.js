function objeto1(){
    var pessoa = Object();
    pessoa.nome = "João";
    pessoa.hello = function(){
       return "hello Pessoa";
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto1();