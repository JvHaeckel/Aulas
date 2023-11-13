// https://www.devmedia.com.br/javascript-for-for-in-for-of/41018

// No exemplo a seguir demonstramos como somar todos os valores de um Array:

const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
  ]

let total = 0;

for(const key in produtos){
  const { valor, quantidade } = produtos[key]

  total += valor * quantidade
}
console.log(total)
