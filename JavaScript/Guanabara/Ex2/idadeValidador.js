// https://www.youtube.com/watch?v=b2K7eo5Jdj8&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=19&ab_channel=CursoemV%C3%ADdeo

function verify(){
   
    var data = new Date();                             // colocando a data
    var ano = data.getFullYear();                      // pegando o ano
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    // Validação

    if(fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert("Verifique os dados e tente novamente");
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');

        if(fsex[0].checked){
            genero = 'homem';
            if(idade >= 0 && idade < 10 ){
                img.setAttribute('src', '');
            } else if(idade < 21){
                img.setAttribute('src', '');
            }else if(idade < 50){
                img.setAttribute('src', '');
            }else{
                img.setAttribute('src', '');
            }
           
        }else {
            genero = 'mulher'
        }
        if(idade >= 0 && idade < 10 ){
            img.setAttribute('src', '');
        } else if(idade < 21){
            img.setAttribute('src', '');
        }else if(idade < 50){
            img.setAttribute('src', '');
        }else{
            img.setAttribute('src', '');
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos que é ${genero} com ${idade} anos.`;
        res.appendChild(img); // Isso que faz as fotos aparecerem

    }
}