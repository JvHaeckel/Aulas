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
// Usando herança vamos criar um cleinte que tenha poupança

class ClientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,poupanca){
        super(nome,email,cpf,saldo,poupanca);   // como esta herdando usa o super
        this.saldo = saldo;
    }
    depositarPoup(valor){
        this.poupanca += valor;
    }
}
const client = new ClientePoupanca("Marmora", "a@gmail.com")



