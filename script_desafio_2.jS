/*
* Exercicio número 1 do desafio 2.
* @uthor: Rafael Epifanio  
* Data: 03/12/2019
*/
var btExec1 = document.getElementById('btExec1');
var divElement = document.createElement('div');

btExec1.onclick = function () {
    divElement.setAttribute('class', 'box');
    divElement.style.width = 100;
    divElement.style.height = 100;
    divElement.style.backgroundColor = 'red';

    var divFather = document.getElementById('divExercicio1');
    divFather.appendChild(divElement);
}

/*
* Exercicio número 2 do desafio 2.
* @uthor: Rafael Epifanio  
* Data: 04/12/2019
*/
divElement.onclick = function () {
    var color = getRandonCollor();  
    divElement.style.backgroundColor = color;
}

function getRandonCollor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}