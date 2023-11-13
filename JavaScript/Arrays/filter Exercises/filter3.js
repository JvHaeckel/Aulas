// Quais estados se iniciam com a letra S ??

var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];


// function buscaS (estado) {

//     if (estado.charAt(0) == 'S'){
//         return estado;
//     }
// }

// var estadoComS = estados.filter(buscaS);
// console.log(estadoComS);

let estadosComS = estados.filter(letra => (letra.charAt(0) == 'S'));
console.log(estadosComS);