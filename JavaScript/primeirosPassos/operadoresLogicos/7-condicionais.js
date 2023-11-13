const listaViagens = new Array('Sp', 'Rj', 'Bk', 'Jp');
listaViagens.push('Curitiba'); // adc elementos
const idadeP = 17;
const compania = true;

if(idadeP < 18 ){   // Se o comprador for menor de idade nao pode ir a Curitiba
    
    if(compania == false){  // já cosnidera true caso não coloque nada: compania == true 
    
    console.log("Nao e maior de idade mas está acompanhado, os destinos: " + listaViagens);
  }
  else{
    listaViagens.splice(4,1);
    console.log("Nao e maior de idade e nao esta acompanhada, apenas os destinos: " + listaViagens);
  }
}
else{
    console.log("Maior de idade e posso vender os destinos: " + listaViagens);
}
