// Button CLique Delicio

//https://www.youtube.com/watch?v=wWnBB-mZIvY&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=16&ab_channel=CursoemV%C3%ADdeo
// 25:44
var clique = window.document.getElementById('button');

clique.addEventListener('click', clicar);
clique.addEventListener('mouseenter', entrar);
clique.addEventListener('mouseout', sair);

function clicar(){
    clique.innerText = 'Poxa Clicou mesmo';
    clique.style.background = 'red';
}
function sair(){
    clique.innerText = 'Volte';
    clique.style.background = 'green';
}


// Somando Valores dos Salários

function somar(){
    var n1 = window.document.getElementById('n1');
    var n2 =window.document.getElementById('n2');

    var n1 = Number(n1.value);
    var n2 = Number(n2.value);
    var soma = n1 + n2;
}

















