/*
* Exercicio número 1 do desafio 3.
* @uthor: Rafael Epifanio  
* Data: 05/12/2019
*/
var inputElementExec1 = document.querySelector('#inputIdadeExec1');
var butElementExec1 = document.querySelector('#butExec1');

 var minhaPromise = function(idade){
    return new Promise(function(resolve, reject){   
        if (idade  >= 18){
            resolve("Maior de idade")
        }
        else {
            reject("Menor de idade")
        }
    })
}

function verificaIdade(){
    minhaPromise(inputElementExec1.value)
    .then(function(response){
        console.log(response) ;
    })
    .catch(function(reject){
        console.log(reject);
    })
}

butElementExec1.onclick = function(){
    setTimeout(verificaIdade, 2000);
} 




