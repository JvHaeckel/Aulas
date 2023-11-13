
const cliente = {
    nome: "Joao Victor",
    idade:25,
    cpf: "101984057",
    mail: "arrocha",
    fones: ["555555", "22222222"], 
    dependentes: [  { // Para poder adicionar mais dependentes vamos mudar para um array inserindo os [{}]
        dependente1: "Joao",
        dependente2: "Guilherme",
}]
}
// Inserindo novo dependente no array de dependentes

 cliente.dependentes.push({
     nome: "Maria",
     parentesco:"filha",
     nascimento: "04/01/2014",
 })

 const filhaNova = cliente.dependentes.filter(novinha => dependentes.nascimento === "04/01/2014");
 console.log(filhaNova[0].nome);
