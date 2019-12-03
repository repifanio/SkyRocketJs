/*
* Exercicio número 1 do desafio 1.
* @author: Rafael Epifanio  
* Data: 02/12/2019
var endereco = {
    rua: "Beco do binga",
    numero: 105,
    bairro: "Picada",
    cidade: "Barra do Ribeiro",
    uf: "RS"
};

console.log("O Rafael mora na rua" + endereco.rua + " " + endereco.numero + ", Bairro:" 
            + endereco.bairro + ", Cidade:" + endereco.cidade + "/" + endereco.uf); 
*/


var inputElement1 = document.getElementById("numeroField1");
var inputElement2 = document.getElementById("numeroField2");
var buttonElemnte = document.getElementById("btMostra");

buttonElemnte.onclick = function(){
    
    var i = inputElement1.value;

    while (i >= inputElement1.value && i <= inputElement2.value){                
         if ((i%2) == 0){
             console.log(i);
         }
        i++;

    }
    console.log("Não entrei no loop");
}