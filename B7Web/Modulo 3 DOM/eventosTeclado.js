// https://alunos.b7web.com.br/curso/javascript/javascript-eventos-de-teclado-1

/*  Eventos de teclado 1   */

// onkeydown  - quando aperta
// onkeypress - quando está apertando
// onkeyup    - quando solta

// function apertou () {
//     console.log("Apertou");
// }

// function segurou () { 
//     console.log("Segurou");
// }

// function soltou () {
//     console.log("Soltou");
// }


    /*   Eventos de teclado 2   */ 
// https://alunos.b7web.com.br/curso/javascript/javascript-eventos-de-teclado-2

function digitou (e){
    console.log(e.code); // Vai dizer qual tecla apertou
}

/* 
e.key      - não é tão específico
e.shiftKey - boolean que vai dizer a tecla apertada junto com True or false acerca do SHIFT
e.ctrltKey - boolean que vai dizer a tecla apertada junto com True or false acerca do SHIFT
e.alttKey  - boolean que vai dizer a tecla apertada junto com True or false acerca do alt
*/



