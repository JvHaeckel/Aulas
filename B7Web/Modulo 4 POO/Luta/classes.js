// Criar classes de personagens 

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
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {
    constructor() {
        this.name = 'Little Monster';
        this.life = 40;
        this.attack = 4;
        this.defense = 3;
        this.maxLife = this.life;

    }
}

class BigMonster extends Character {
    constructor() {
        this.name = 'Big Monster';
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;

    }
}

/* --------- CENÁRIO ----------  */

class Stage {

    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        /* El - elemento */
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();
    }

    update() {

        /* Essa função vai apenas atualizar a tela com as info dos lutadores*/
        // Fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - HP: ${this.fighter1.life}`;
        
        // Calcular a vida e atualizar a barrinha lutador 1
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector(".name").innerHTML = this.fighter2.name;
        
        // Calcular a vida e atualizar a barrinha lutador 2
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

    }



}


