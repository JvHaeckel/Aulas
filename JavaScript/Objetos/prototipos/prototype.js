// Cliente Genérico- ddGerar function que permite a criação de clientes a partir de um modelo

function Cliente(nome,cpf,email,saldo){  // Função constrututora 

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

let cliente1 = new Cliente("Joao", "09711394405", "jv@gmail.com",500)
console.log(cliente1)


function ClientePoupanca (nome,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)  // Chama o objeto 
    this.saldoPoup = saldoPoup;
}
const kom = new ClientePoupanca("Kom", 5555555, "kom@", 200, 300);
console.log(kom)

ClientePoupanca.prototype.depositarPoup = function (valor){ // Apenas inseriu uma nova Function no prototype
    this.saldoPoup += valor;
}

kom.depositarPoup(50)
console.log(kom);