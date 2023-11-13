// Acessar telefones do mesmo cliente

const cliente = {
    nome: "Joao Victor",
    idade:25,
    cpf: "101984057",
    mail: "arrocha",
    fones: ["555555", "22222222"], // Criado um array que vai ter os telefones do cliente
    dependentes: { // Criando objeto dentro de outro
        dependente1: "Joao",
        dependente2: "Guilherme",
    }
}

// Criando objeto dentro de outro inserindo por fora 
cliente.dependente = {
    nomes: "Sara",
    parebntesco: "filha"
}

cliente.fones.forEach(fone => console.lof(fone));

