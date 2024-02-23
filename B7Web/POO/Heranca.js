// https://alunos.b7web.com.br/curso/javascript/javascript-classes-heranca

/* Herança */

class Person {

    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

class Student extends Person {  // Extends - a pessoa herda
    constructor(name, lastName, age, id) {
        super(name);
        super(lastName);
        this.age = age;
        this.id = id;
    }
}

let p1 = new Student('joão', "Haeckel", 26, 171);

console.log(`Meu nome é ${p1.name} ${p1.lastName}, tenho ${p1.age} anos e matrícula ${p1.id}`);







