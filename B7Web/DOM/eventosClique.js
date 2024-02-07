function cliaca(){
    console.log("Clicou já corno")
}

// Vamos atyribuir uma variável para assim poder usar na linha 8 e dentro do 
// addEventListener (escutador de evento) botamos o click e a function

let botao = document.querySelector('button');
botao.addEventListener('click',clicou)

/*  Poderia ser assim: 
document.querySelector('button').botao.addEventListener('click',clicou) */