/* https://alunos.b7web.com.br/curso/javascript/javascript-classes-factory*/

        /* Factory */

// Função que cria uma instância. Ajuda a simplificar o processo de criação de objetos

class Person {

        age = 0;

        constructor(name){
                this.name = name;
        }

}

function createPerson (name, age){
        let p = new Person(name);
        p.age = age;  // seta a idade
        return p;
}




