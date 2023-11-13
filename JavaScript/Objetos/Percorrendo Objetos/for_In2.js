const pessoa = {
    nome: 'Bruno',
    idade: 25
  }
  
  for (const key in pessoa) {
    console.log(`${key} - ${pessoa[key]}`)
  }