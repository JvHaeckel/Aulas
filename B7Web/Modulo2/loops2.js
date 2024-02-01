// https://alunos.b7web.com.br/curso/javascript/js-dando-loop-em-arrays
/*  20 Loop For */

 let cor = [ 
    {nome: "preto" , qtd: 10 },
    {nome: "azul" , qtd: 5 },
    {nome:"red" , qtd:15 }
 ];

 
 for(let criei of cor){
     console.log( `Nome: ${criei.nome} com ${criei.qtd} unidades`)
 }


