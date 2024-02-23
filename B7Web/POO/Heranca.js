// https://alunos.b7web.com.br/curso/javascript/javascript-classes-heranca

/* Herança */

class Person {

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    sayHi (){
        console.log(` OII, Meu nome é ${this.name} ${this.lastName}`);
    }
}

class Student extends Person {  // Extends - a pessoa herda
    constructor(name, lastName, age, id) {
        super(name);
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }
sayHello(){  /* Se colocasse o mesmo nome iria sobrescrever e essa seria levado em conta*/
    super.sayHi(); // Super - vai ser usado para executar do pai(Person)
}

}

let p1 = new Student('João', "Haeckel", 26, 171);

/* Antes de criar o método SayHi fiz assim: */
// console.log(` ${p1.name} ${p1.lastName}, tenho ${p1.age} anos e matrícula ${p1.id}`);

p1.sayHi();
console.log(`, tenho ${p1.age} anos e matrícula ${p1.id}`);







