//segunda forma 
function objeto2(){
    var pessoa = {
       nome : "João",
       hello: function(){
             return "hello pessoa";
       }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto2();