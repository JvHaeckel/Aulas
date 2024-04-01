/* https://alunos.b7web.com.br/curso/javascript/js-manipulando-elementos-3*/

function clicou() {

    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    /* Colocando elementos ao redor */
    // ul.after("Texto depois");
    // ul.before("Texto antes");


              /* Adicionando elemento de fato :*/

    // let newButton = document.createElement('Button');
    // newButton.innerHTML = 'Botão';
    // ul.after(newButton);

               /* Adicionando nova lista */

    let newList = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = 'Item add' + (i + 1);
        newList.append(newLi);
    }

    ul.append(newList);
}















