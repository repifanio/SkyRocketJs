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

function getRandonCollor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

/*
* Exercicio número 3 do desafio 2.
* @uthor: Rafael Epifanio  
* Data: 04/12/2019
*/
var btn = document.querySelector('#btExec2');

btn.onclick = function () {

    var nomes = ["Diego", "Gabriel", "Lucas"];

    for (nome of nomes) {

        var divExec3Element = document.querySelector('#exec3');
        var lista = document.createElement('ul');
        var itemLista = document.createElement('li');
        var textoLista = document.createTextNode(nome);
        
        itemLista.appendChild(textoLista);
        lista.appendChild(itemLista);
        divExec3Element.appendChild(lista);
    }
}