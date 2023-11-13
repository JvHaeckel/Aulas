let maikon = [ 
    {
    nome: [],
    idade:23,
    sexo: "masculino beta",
    partido: "Lulista Forever",
    'rua numero': "201",   // Quando uma chave for separada por espaços coloque entre aspas
    dependentes:[{
        nome:"luna",
        idade:10,
        parentesco: "filha"
    },
    {
        nome:"Loki",
        idade:"1",
        parentesco: "filho"
    }],
},
]
maikon.nome ="Delicia";
const listaDependentes = [...maikon[0].dependentes];
 console.table(listaDependentes);
 console.table(maikon);