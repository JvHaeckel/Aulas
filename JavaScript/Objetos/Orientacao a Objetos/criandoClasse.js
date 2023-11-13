class Cliente{
    constructor(nome,email,cpf,saldo){  // Construtor
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }                                   // Construtor
// Métodos
    depositar(valor){
    this.saldo += this.valor;
    }

    exibirSaldo(){
    console.log(saldo);
    }

}

let client = new Cliente("joao","joao@gmail.com","09711394405", 550);
console.log(client);


