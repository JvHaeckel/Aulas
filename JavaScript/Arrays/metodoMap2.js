// Dado o array use o map para multiplicar todos os valores por 10

let array = [1,2,3,4];

// let multi= (array)=> {return array*10;};

let newArray = array.map(num => num * 10);  // Podemos colocar direto no map, perceba que o parâmetro num so foi declarada dentro
console.log(newArray);