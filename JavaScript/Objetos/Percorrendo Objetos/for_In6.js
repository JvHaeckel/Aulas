//  https://www.programiz.com/javascript/for-in

// Update Values of Properties: coloque o $ em cada salário

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

for(let key in salaries){
     let salario = "$" + salaries[key];
     console.log(`${key} : ${salario}`);  

    //Ou coloque apenas isso:  console.log(`${key} : $ ${salaries[key]}`);
}

