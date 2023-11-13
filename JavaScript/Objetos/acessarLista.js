const cliente = {
    nome: "Joao Victor",
    idade:25,
    cpf: "101984057",
    mail: "arrocha",
    amigo: {
        nome: "Fabio",
        classe: "Magro"
    }

}

cliente.nome = "vit";  // Adicionando
// console.log(joao);
delete cliente.amigo
// console.log(joao);

// Propriedades de objetos também  podems ser acessadas ou alteradas usando colchetes
cliente["idade"] = 27;
console.log(cliente);