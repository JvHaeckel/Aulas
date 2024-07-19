/* #12  Promises com async/await

https://alunos.b7web.com.br/curso/javascript/javascript-promises-com-asyncawait
*/

// function clicou() {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())  /* Converteu em Objeto*/
//     .then(json => alert("JSON"))
//     .catch( alert("Deu problema na parada"));


//     alert("Aqui");
// }

async function clicou() {

  // ao fazer isso deixou tudo síncrono
  let req = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let json = await response.json();
  alert('Título da parada');

  alert("Aqui");

}

/* Async e Await faz com que o fetch espere*/

async function inserir() {
  let req = await fetch(
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

    });

 let json = await response.json() /* Converteu em Objeto*/
 console.log(json);
}


document.getElementById("Botão").addEventListener('click', clicou);
document.getElementById("inserir").addEventListener('click', inserir);


