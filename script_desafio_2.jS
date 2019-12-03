/*
* Exercicio número 1 do desafio 2.
* @uthor: Rafael Epifanio  
* Data: 03/12/2019
*/
var btExec1 = document.getElementById('btExec1');

btExec1.onclick = function(){
    var divElement = document.createElement('div');

    divElement.setAttribute('class', 'box');
    divElement.style.width = 100;
    divElement.style.height = 100;
    divElement.style.backgroundColor = 'red';

    var divFather = document.getElementById('divExercicio1');
    divFather.appendChild(divElement); 
}