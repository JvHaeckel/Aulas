// Para rodar aperte: CTRL + F5
const listaViagens = new Array('Sp', 'Rj', 'Bk', 'Jp');

const idade = 18;
const destino = "Rj";

console.log("\n Possíveis Destinos");
console.log(listaViagens);

let cont = 0;    

  while(cont < 3){
    if(listaViagens[cont] == destino){
      console.log("Existe destino");
    }else{
      console.log("Não existe destino");
    }
    cont += 1;
  }