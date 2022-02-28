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
