//terceira forma

function Pessoa(){
    this.nome = "joao";
    this.hello = function(){
        return "hello pessoa;"
    }
  }
function objeto3(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objeto3();
