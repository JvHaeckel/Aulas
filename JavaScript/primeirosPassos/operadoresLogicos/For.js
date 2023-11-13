// Para rodar aperte: CTRL + F5
const listaViagens = new Array('Sp', 'Rj', 'Bk', 'Jp');

const idade = 18;
const destino = "Rj";
const acompanhamento = false;

console.log("\n Possíveis Destinos");
console.log(listaViagens);

const podeComprar = idade >= 18 || acompanhamento == true;
let cont = 0;   
let destinoExiste = false; 

  for( let cont = 0; cont < 3; cont++  ){  // cont == i pode trocar 
    if(listaViagens[cont] == destino){
      console.log("Existe destino");
      destinoExiste == true;
      break; 
    }
  }