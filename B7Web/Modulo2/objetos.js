let pessoa = {
    name: 'Joao',
    age: 26,
    persona : {
        surname: 'Haeckel',
        strenght: 100,
        mental: 50,
    },
    olhos: ['azul', "verde"],

    // Aqui vamos colocar um objeto dentro do array carros
    carros: [
        {modelo: "chev", cor: 'azul'},  /* Elemento de índice 0 do array */
        {modelo: 'ferrari', cor: "amarelo"},
    ]
}

console.log(pessoa.persona.strenght);

pessoa.persona.strenght += 100;

console.log(`A força aumentou para: ${pessoa.persona.strenght}`);

// Adicionando mais uma cor de olhos ao array dentro do Objeto
pessoa.olhos.push('organge');

// Preste atenção na regra: para objetos use ponto (.) para acessar e nos arrays
// vc usa os colchetes [].
console.log(pessoa.carros[0].modelo);









