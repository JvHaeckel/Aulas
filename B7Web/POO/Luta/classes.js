
class Character {

    life = 1;         // Tinha colocado sem o Underline mas tive que por pois é a regra quando usamos Getters e Setters
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life
    }

    set life(newLife) {
        this._life = new life < 0 ? 0 : newLife;

        // if(newLife < 0 ){
        //     this._life = 0;
        // } else {  this._life = newLife};
    }
}

class Knight extends Character {

    constructor(name) {
        super(name);  // Usa super para pegar do pai/mãe
         // Ele vai ter as próprias carcteríticas
        this.life = 100; 
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {

    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {

    constructor(){
        this.name = 'Little Monster';
        this.life = 40;
        this.attack = 4;
        this.defense = 3;
        this.maxLife = this.life;

    }
}

class Bigonster extends Character {

    constructor(){
        this.name = 'Big Monster';
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;

    }
}



let person1 = new Knight("Joao");

console.log(person1.name);



