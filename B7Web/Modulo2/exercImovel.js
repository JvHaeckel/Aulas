/*    Módulo 2 - Exercício de funções #5      */  

// Calculando o preço do Imóvel 

/* m2 = 3000
- 1 quarto o m2 é 1x 
- 2 quartos o m2 é 1.2x
- 3 quartos o m2 é 1.5x 
Uso da função: */

let metros = 180;
let nQuartos = 3;
let valor = calcula(metros, nQuartos);
console.log(`A casa custa:  ${valor}`);


function calcula ( m , q){
   
    let m2 = 3000;
    let price = 0;

    switch(q){
        case 1: price = m2 * m;  break;
        case 2: price = m2 * (m * 1.2);  break;
        case 3: price = m2 *  (1.5 * m);  break;
    }
    return price;
}

