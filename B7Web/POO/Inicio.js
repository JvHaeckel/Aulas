
class Person {

    // Para colocar variáveis dentro da classe não precisamos colocar let/const/var
    steps = 0;
    salary = 0;

    constructor (name,age){
        this.name = name;
        this.age = age;
    }

     takeSteps (){
        this.steps ++;
     }

     setSalary (valor){
        this.valor ;
     }
}

let p1 = new Person('Joao', 26);
let p2 = new Person('Maria', 20);
let p3 = new Person('Gavi', 29);

p1.salary = 1400;
p2.salary = 1000;
p3.salary = 3000;

p1.takeSteps();

console.log(`A pessoa: ${p1.name} tem ${p1.age} anos, com o salário de R$${p1.salary} e deu ${p1.steps} passo(s)`)



