
class Person {

    // Para colocar variáveis dentro da classe não precisamos colocar let/const/var
    _age = 0         // Colocar o Underline na variável que iremos pegar
    steps = 0;
   
    constructor (name){
        this.name = name;
    }

     takeSteps (){
        this.steps ++;
     }

     get age (){  // Retorna
      return this._age;
     }
    
}

let p1 = new Person('Joao', 26);
let p2 = new Person('Maria', 20);
let p3 = new Person('Gavi', 29);

p1.takeSteps();

console.log(`A pessoa: ${p1.name} tem ${p1.age} anos e deu ${p1.steps} passo(s)`)


