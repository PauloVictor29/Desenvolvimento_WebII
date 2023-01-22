function testeArray(){
    var numeros = [1, 2, 3]
    numeros.push(4); //Adicona o numero 4 
    numeros.push(5); //Adiciona o numero 5
    for (let i = 0; numeros.length > i; i++){
       console.log(numeros[i]); //Imprime cada item do array
    }
 }
   //Executa a Função
 testeArray();