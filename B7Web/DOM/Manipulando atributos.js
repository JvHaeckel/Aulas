/* https://alunos.b7web.com.br/curso/javascript/js-manipulando-atributos*/

/*  Manipulando atributos parte 1  */

// function clicou() {

//     const input = document.querySelector('input');
//     input.setAttribute('placeholder', 'Placeholder alterado');

// }


/* Manipulando atributos parte 2 : Ao clicar no button ele vai mostrar
o que digitou e ao clicar de novo ele volta ao icógnito */

function clicou() {

    const input = document.querySelector('input');  // antes de tudo vc seleciona o que vai modificar
    let botao = document.querySelector('.botao');
   
    if(input.getAttribute('type') === 'text'){      
        input.setAttribute('type', 'password');     // aqui setou a mudança de texto para password
        botao.innerText = 'Mostrar Senha';
    } else { 
        input.setAttribute('type' , 'text')
        botao.innerText = 'Ocultar Senha';
    };  
    
    input.setAttribute('placeholder', 'Placeholder alterado');


}



