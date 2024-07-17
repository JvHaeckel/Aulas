/* #6  Fazendo uma requisição na prática

https://alunos.b7web.com.br/curso/javascript/javascript-fazendo-uma-requisicao-na-pratica

*/
/* Aqui apenas mostrou o uso do FETCH*/
// function clicou() {
//     fetch('https://jsonplaceholder.typicode.com/')
//     .then( data => {console.log(data);})
// }

//     document.getElementById("Botão").addEventListener('click', clicou);


/* */

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
        .catch()

        
    }





    /* Resumi demais a parte do then em arrow function, mas foi o seguinte:
    apenas usamos a o fetch para fazer uma requisição e depois tranformamos
    em JSON para termos um objeto de fato */

    document.getElementById("Botão").addEventListener('click', clicou());




