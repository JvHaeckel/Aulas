// https://alunos.b7web.com.br/curso/javascript/javascript-classes-variavelmetodo-estatico

/* Variável/Método estático */

class Person {

    static hands = 1;   /* Variável Estática todo mundo vai ter 1 mão, no caso ela faz
  referência a pessoa!! */  
    age = 0;

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

Person.hands = 2; // Tem que ser assim pois é uma variável estática
let p1 = new Person ("João", "Haeckel");

console.log(`Meu nome é ${p1.name} ${p1.lastName}, e tenho ${Person.hands} mãos`)



