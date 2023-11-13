const notas = [7,8,7,7,5];
let somaTotal = 0;

notas.forEach(function(nota){
    somaTotal = somaTotal + nota; // somaTotal += nota
})

// notas.forEach(nota =>{
//     somaTotal += nota
// })

let media = somaTotal/notas.length;
console.log(media);