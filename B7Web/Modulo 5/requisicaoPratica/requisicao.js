/* #6  Fazendo uma requisição na prática
Até aula 11

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
    .then(response => response.json())  /* Converteu em Objeto*/
    .then(json => console.log(json))
    .catch()


}
/* Resumi demais a parte do then em arrow function, mas foi o seguinte: apenas usamos a o fetch para fazer uma requisição 
e depois tranformamos em JSON para termos um objeto de fato */


// Na aula 11 fizemos uma requisição POST: 

function inserir() {
  fetch(
    'https://jsonplaceholder.typicode.com/todos/1',  /* Foi criado um array dentro do fetch por isso as vírgulas*/
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({            /* Essas informações estarão: na aba network - Payload*/
        title: 'Título de teste',
        body: 'Corpo de teste',
        userId: 2
      })      /* Essa função traduz o objeto em JSON*/


    }
  ).then(response => response.json())  /* Converteu em Objeto*/
  .then(json => console.log(json));
}



document.getElementById("Botão").addEventListener('click', clicou);
document.getElementById("inserir").addEventListener('click', inserir);


