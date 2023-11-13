// Acessar telefones do mesmo cliente

const cliente = {
    nome: "Joao Victor",
    idade:25,
    cpf: "101984057",
    mail: "arrocha",
    fones: ["555555", "22222222"], // Criado um array que vai ter os telefones do cliente
    dependentes: {
        dependente1: "Joao",
        dependente2: "Guilherme",
    }
}
console.log(cliente.dependentes.dependente1);
// joao.fones.forEach(fone => console.log(fone));

