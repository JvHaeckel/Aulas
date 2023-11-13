// https://www.youtube.com/watch?v=b2K7eo5Jdj8&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&index=19&ab_channel=CursoemV%C3%ADdeo

function contar(){
   
   var ini = document.getElementById('txtIni');
   var fim = document.getElementById('txtF');
   var passo = document.getElementById('txtP');
   var res = document.getElementById('res');

   if(ini == 0 || fim == 0 || passo == 0){
      window.alert("Faltam dados");
   }
   else{
      res.innerHTML = 'Contando: ';

      let i = Number(ini.value);
      let f = Number(fim.value);
      let p = Number(passo.value);

      for(let c = i; c <= f; c += p){
         res.innerHTML += `${c} -`
      }

   }




    }
