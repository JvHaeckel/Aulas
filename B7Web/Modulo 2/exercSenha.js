/*    Módulo 2 - Exercício de funções #6 (mais fácil) */ 

/* Crie uma function que valide user e senha, sendo:
User : pedro
Password: 123 */

let user = 'joao';
let password = '1234';

//1 let validando = value(user,password);
//1 if(validando){
// 1    console.log("acess");
//1 } else{console.log("Denied")};

// 2 let  validando = value(user,password);
// 2 validando ? console.log("Acess") : console.log("Denied");

 /*1 function value (u , p){
    1 if(u == 'joao' && p == '1234' ){
    1     return true;
    1 } else { return false};
  
    // 2  return u =="joao" && p == "1234" ? true : false ;

} */


// FORMA FINAL - arrow function e operador ternário.
let value = (u,p) => u =="joao" && p == "1234";

value(user,password) ? console.log("Acess") : console.log("Denied")

