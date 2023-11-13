// https://www.youtube.com/watch?v=b2K7eo5Jdj8&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=19&ab_channel=CursoemV%C3%ADdeo

function load(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto');
    
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`;

    if(hora < 12 && hora >= 0){
        img.innerHTML = '<img src="Fotos/manha.jpg">' // Guanabra nao pega o jeito dele usei de um coment no YT
        document.body.style.background = '#FFD700';
    }
    else if(hora >=12 && hora <18){
        img.innerHTML = '<img src="Fotos/tarde.jpg">'
        document.body.style.background = '#FF4500'
    }
    else{
        img.innerHTML = '<img src="Fotos/noite.jpg">'
        document.body.style.background = '#1C1C1C'
    }
}
