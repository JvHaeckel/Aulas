// Filtrar qual aluno foi reprovado: 

const nomeDosAlunos = ['Ana','Marcos','Maria','Mouro']
const notaDosAlunos = [7,4.5,8,7.5]

//O método filter pode receber até três parametros

//o Primeiro e obrigatório é o valor atual do array
//o Segundo (opcional) é o indice, ele é quem representada cada item do array
// por ultimo o Terceiro, que é o o proprio array sendo percorrido
const reprovados = nomeDosAlunos.filter((valorAtual,indice,array) =>{
  console.log("Este é o indice: " + indice + " com o valor atual de: " + valorAtual);
  console.log("Aqui é o terceiro parametro: " + array)

 if (notaDosAlunos[indice] < 5){
   console.log("Valor que atende a condição proposta : " + valorAtual)
   //O valor atual, quando a condição for verdadeira.
   return valorAtual;
 }
})
console.log("Este é o array que o filter retornou: " + reprovados)