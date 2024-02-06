// https://alunos.b7web.com.br/curso/javascript/js-iteracao-de-array-1
                  /* Iteracao de Arrays 1 */


    /* Ele quer saber se as frutas tem mais de 3 letras*/
let fruits = ['Maçã' , 'Uva' , 'Laranja', 'Banana'];

// fruits.every ((value) => {
//     if (value.length > 3){
//         return true;
//     } else { return false};
// });

     /* Resumindo */

// Every - só retorna true se todos forem da condição

   let frutas =  fruits.every ((value) => { value.length < 3  });

 if (frutas){
     console.log("Todos maiores que 3");
 } else {
     console.log("Não são maiores que 3");
}
console.log(frutas);


// Some - Agora queremos saber se algum é maior que 3 

let fruits1 = [ 'Uvas', 'banana' ]

let frutas2 =  fruits1.some ((value) => { return value.length > 3  });

if (frutas2){
    console.log("Algum item é maior que 3");
} else {
    console.log("Nenhum item é maior que 3");
}
console.log(frutas2);


// Includes - Procurar algo nos arrays

let fruits3 = [ 'Marmota', 'banana' ]

if(fruits3.includes("Uva")){
    console.log("Tem a Uva ");
} else {
    console.log("Não Tem a Uva ");
}

