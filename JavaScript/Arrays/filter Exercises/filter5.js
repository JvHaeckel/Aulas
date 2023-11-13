// array containing numerical values and remove negative values using the filter array function.
// [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20]

let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive = array.filter(valor => valor >=0);

console.log(positive);

// -----Normal------ 

// function positivos (valor){
//     if(valor >=0){
//         return valor;
//     }
//     // Poderia colocar apenas: return valor >=0;
// }

// let positive = array.filter(positivos);