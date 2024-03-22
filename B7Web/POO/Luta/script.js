
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





