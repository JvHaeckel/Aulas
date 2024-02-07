function clica(){
    console.log("Clicou já corno")
}

// Vamos atyribuir uma variável para assim poder usar na linha 8 e dentro do 
// addEventListener (escutador de evento) botamos o click e a function

let botao = document.querySelector('button');
botao.addEventListener('click',clicou)

/*  Poderia ser assim: 
document.querySelector('button').botao.addEventListener('click',clicou) */


/* Manipulando elementos 1 
https://alunos.b7web.com.br/curso/javascript/js-manipulando-elementos-1*/


function clica(){
    console.log("Clicou já corno");

    let botao = document.querySelector('button');
botao.addEventListener('click',clicou)

    ul.innerHTML = '<li> Item modificado </li>';
}


/* Manipulando elementos 2 
https://alunos.b7web.com.br/curso/javascript/js-manipulando-elementos-2*/

function clica(){
   
    let botao = document.querySelector('button');


    
}

