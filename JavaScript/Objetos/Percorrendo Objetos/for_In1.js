// Puxando relatório - percorrer objeto extraindo info de um cliente de forma automatizada

let cliente = {
    nome: 'André',
    idade: 36,
    cpf: 10198417149,
    fones: ['55555555', '44444444'],
    dependentes: [
        {
        nome: 'Sara Silva',
        parentesco: 'filha',
        nascimento: '20/03/2011'},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            nascimento: '04/01/2014'}
    ],
    saldo:100,
    depositar: function(valor){
        this.saldo += valor; 
    }
}

// Percorrendo usando método For in

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
        relatorio += `${info} ==> ${cliente[info]} `
    }
        relatorio += `${cliente[info]}`;
    }

console.log(relatorio);












