const notas = [5 , 5 , 5 ,5];

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(media);

// Adicionando elementos na lista
notas.push(10);
console.log(notas);

const media2 = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length;
console.log(media2);

// Removendo elementos da lista 
notas.pop()
let media3 = (notas[0] + notas[1] + notas[2] + notas[3] )/notas.length;
console.log(media3);

