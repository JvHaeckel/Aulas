// https://alunos.b7web.com.br/curso/javascript/js-iteracao-de-array-1
                  /* Iteracao de Arrays 1 */

let fruits = ['Maçã' , 'Uva' , 'Laranja', 'Banana']

// PS: podemos colocar qualquerNome
let frutas = fruits.filter ((qualquerNome) => {
    if(qualquerNome.length < 4){
        return true;
    }
    else {return false} ;
});

            /* Resumindo  */
// let frutas = fruits.filter ((qualquerNome) => {
//   return qualquerNome.length < 4
// });

        /* Apenas 1 LINHA */
// let frutas = fruits.filter ((qualquerNome) => qualquerNome.length < 4);

console.log(frutas);