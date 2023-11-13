// Vamos imaginar uma variável do tipo array com uma sequência numérica de um a dez, 
//e precisamos separar todos os elementos pares.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarNumerosPares (value) {
    if (value % 2 == 0) 
    return value;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);

// Usando Arrow Function

// var retorno = numeros.filter(pares => (pares %2)== 0);
// console.log(retorno);


