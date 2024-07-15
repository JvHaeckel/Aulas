/* #5  O que é um Callback?

https://alunos.b7web.com.br/curso/javascript/javascript-o-que-e-um-callback */


// Se aplica a eventos, botoes e requisições. 

// let botao = document.getElementById("Botão");
// botao.onclick = function (){
//     alert("Cuidado")
// }

document.getElementById("Botão").addEventListener('click', () => {
    alert("Cuidado", clickCallBack);
});

let clickCallBack = ()=> alert("Cuidado");







