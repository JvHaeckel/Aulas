let nomes = ['joao', 'Ana' , 'Caio' , 'Vit', 'Brit', 'Fábio', 'Hugo'];

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log("Alunos da sala1: ${sala1} ");
console.log('Alunos da sala2: ${sala2}');  // Não pega investigar o motivo 
console.log(nomes.length);