// Vai ser a execução geral do Código

let char = new Knight('Joao');
console.log(char.name);

let monster = new LittleMonster();

const stage = new Stage (
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);

stage.start();

