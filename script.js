/*
* Exercicio número 1 do desafio 1.
* @uthor: Rafael Epifanio  
* Data: 02/12/2019
*/
var endereco = {
    rua: "Beco do binga",
    numero: 105,
    bairro: "Picada",
    cidade: "Barra do Ribeiro",
    uf: "RS"
};

console.log("O Rafael mora na rua" + endereco.rua + " " + endereco.numero + ", Bairro:" 
            + endereco.bairro + ", Cidade:" + endereco.cidade + "/" + endereco.uf); 
/*
* Exercicio númeroo 2 do desafio 1
* @uthor: Rafaek Epifanio
* Data: 02/12/2019
*/
var inputElement1 = document.getElementById("numeroField1");
var inputElement2 = document.getElementById("numeroField2");
var buttonElementExec1 = document.getElementById("btExercicio2");

buttonElementExec1.onclick = function(){
    
    var i = inputElement1.value;

    while (i >= inputElement1.value && i <= inputElement2.value){                
         if ((i%2) == 0){
             console.log(i);
         }
        i++;
    }
}
/*
* Exercico número 3 do desafio 1
* @uthor: Rafael Epifanio
* Data: 02/12/2019
*/
var skills = ["java", "javaScript", "C#", "PHP", "react"];

var buttonElementExec2 = document.getElementById("btExercicio3");
var js = skills.indexOf("javaScript");

buttonElementExec2.onclick = function (){
    if (js >= 0){
        alert("Encontrado na posição:" + js);
    }   
}
/*
* Exercico número 4 do desafio 1
* @uthor: Rafael Epifanio
* Data: 02/12/2019
*/

