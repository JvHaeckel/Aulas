/* Crie uma function que valide user e senha, sendo:
User : pedro
Password: 123 */

let user = 'joao';
let password = '1234';
let validando = value(user,password);
if(validando){
    console.log("acess");
} else{console.log("Denied")};

function value (u , p){
    if(u == 'joao'&& p == '1234' ){
        return true;
    } else { return false};
}
