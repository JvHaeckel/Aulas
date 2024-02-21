// Fazer uma lista onde a pessoa digita no input e ao apertar enter 
// sobe na lista o que foi digitado

      /*  ELEMENTOS   */
    let input = document.querySelector('input');
    let lista = document.querySelector('ul');

      /*  FUNÇÕES   */
 
      function fazendo (tecla){
        if(tecla.key === 'Enter') {   // aqui sabemos se vai digitar o enter 
         let newLi = document.createElement('li');  // Criar elemento
         newLi.innerHTML = input.value; // por o valor digitado
         lista.appendChild(newLi);  // adicionou na lista

         input.value = ''; // Zerar o campo
        } 
      }


      /* Funciona mas iria reescrever todos os itens!! Iamgina com 10.000 itens!! */
    //   function fazendo (tecla){
    //     if(tecla.key === 'Enter'){   // aqui sabemos se vai digitar o enter 
    //         lista.innerHTML += '<li>' + input.value + '</li>' ;  // O value pega o que digitou
    //     }

    //   }


      /*  EVENTOS   */
    input.addEventListener('keyup', fazendo);










