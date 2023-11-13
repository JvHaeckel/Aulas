// function hey(name) {return 'meu nome é '+ name;}
// console.log(hey('Bryan'));

const show = nome => 'meu nome é ${nome}';  // nunca é nomeada e nao precisa usar chaves ou return apenas se tiver outra linha


const soma = (num1,num2) => {
    if(num1 || num2 > 10){
        return "apenas de 1 a 9";
    } return num1 + num2;
}