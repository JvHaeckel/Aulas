// Aluno recebeu ponto extra nas suas notas adicione sem passar de 10...

const notas =  [10,9,8,7,6];

let novasNotas = notas.map (nota => nota == 10 ? nota : ++nota);

console.log(novasNotas);


// let notas = [10,9,8,7,6];
// let soma = [];

// for(let i = 0; i < notas.length; i++){
//   soma[i] = notas[i] + 1;
    
// }
// console.log(soma);
