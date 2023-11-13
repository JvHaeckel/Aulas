// Adicionar ações para os clientes cadastrados, como depósito. 

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
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
