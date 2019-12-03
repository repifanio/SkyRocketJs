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
var inputElement1Exec2 = document.getElementById("numeroField1");
var inputElement2Exec2 = document.getElementById("numeroField2");
var buttonElementExec2 = document.getElementById("btExercicio2");

buttonElementExec2.onclick = function(){
    
    var i = inputElement1Exec2.value;

    while (i >= inputElement1Exec2.value && i <= inputElement2Exec2.value){                
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

var buttonElementExec3 = document.getElementById("btExercicio3");
var js = skills.indexOf("javaScript");

buttonElementExec3.onclick = function (){
    if (js >= 0){
        alert("Encontrado na posição:" + js);
    }   
}
/*
* Exercico número 4 do desafio 1
* @uthor: Rafael Epifanio
* Data: 02/12/2019
*/
var inputElementExec4 = document.getElementById("anosEstudo");
var buttonElementExec4 = document.getElementById("btExercicio4");

buttonElementExec4.onclick = function(){

    console.log(inputElementExec4.value);
    var condicao = inputElementExec4.value;

    if (condicao >= 0 && condicao <= 1){
        alert("Iniciante");
    } else if (condicao >= 2 && condicao <= 3){
        alert("Intermediário");
    } else if (condicao >= 4 && condicao <= 6){
        alert("Avançado");
    } else if (condicao > 7){
        alert("Jedi Master");
    }
}


