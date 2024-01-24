/* https://alunos.b7web.com.br/curso/javascript/js-funcao-dentro-de-objeto 
             Função dentro de objeto  */

let person = {
    name: 'João',
    surname: 'Haeckel',
    age: 27,
    /* Criando a Function dentro do Objeto*/ 
    fullName: function(){
        return this.name + this.surname;
        /* `${this.name} ${this.surname}`; */
    }
}

console.log(pessoa.fullName());





