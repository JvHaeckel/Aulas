function calculandoAge(age){
    // return (age >= 18 && age < 60) ? 'Maior de idade, sendo adulto' : 'Errado';
    return ( 18 <= age < 60) ? 'Maior de idade, sendo adulto' : 'Errado';
}
// let conta = calculandoAge(60);
console.log(calculandoAge(59));
