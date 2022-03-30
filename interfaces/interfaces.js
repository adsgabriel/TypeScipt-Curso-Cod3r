"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Ana';
}
const pessoa = {
    nome: 'Thaisa',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
