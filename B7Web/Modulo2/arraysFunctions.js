// https://alunos.b7web.com.br/curso/javascript/js-funcoes-de-array
                  /* Funções de Arrays + Ordenação de Arrays */

let fruits = ['Maçã' , 'Uva' , 'Laranja', 'Banana']

// Ordenando em ordem alfabética
console.log(fruits.sort());

// Ordenando em ordem alfabética inversa
fruits.sort();
fruits.reverse();
console.log(fruits);

// Join ele não altera o array 

console.log(fruits.join(' ,')) /* Vai mostar tudo separado por vírgulas */

let cars = [
    {brand: "Fiat" , ano: 2022 },
    {brand: "Bmw" , ano: 2018 },
    {brand: "Ferrari" , ano: 2020 },

]

     /* Vamos odernar por ano começando simples */
// cars.sort((a , b) => {
//     if(a.ano > b.ano){ return 1}
//     else{ return 0};

//     }
// });

// Ordenando de forma média 
 
cars.sort( (a,b) => a.ano - b.ano);

console.log(cars); // Em objeto não tem ordem não fez nada