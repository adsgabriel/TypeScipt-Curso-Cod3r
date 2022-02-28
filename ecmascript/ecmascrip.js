"use strict";
// let & const
let seraQuepode = 'P';
console.log(seraQuepode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '123.123.000-99';
console.log(cpf);
var sergredo = 'externo';
function revelar() {
    let sergredo = 'interno';
    console.log(sergredo);
}
revelar();
console.log(sergredo);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Arrow functions
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('ola');
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('Silvio');
//this
/*function normalComThis() {
    console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind('this especial')
normalComThisEspecial()

//this?
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()*/
//Parâmetros padrao
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
