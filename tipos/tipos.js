"use strict";
// string
let nome = 'joao';
console.log(nome);
//numbers
let idade = 27;
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// array
let hobbies = ["cozinhar", "esportes"];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//tuplas
let endereco = ["AV Principal", 99, "Bloco A"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//any
let carro = "BMW";
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funçoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOI() {
    console.log("oi");
}
digaOI();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
//tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
let usuario = {
    nome: 'joao',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: "ana"
};
console.log(usuario);
let funcionario = {
    nomes: ['Ana', 'Silvio'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
let funcionario2 = {
    nomes: ['Isabela', 'Ana'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Horario';
        }
    }
};
console.log(funcionario.nomes);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// union types
let nota;
nota = 10;
console.log(`Minha nota e ${nota}!`);
nota = 'dez';
console.log(`Minha nota e ${nota}!`);
// Checando Tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("E um number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabao',
    preco: 2,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco invalido!');
        }
    }
};
produto.validarProduto();
// Tipo Null
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '32145879',
    tel2: null
};
console.log(contato1.nome, contato1.tel1, contato1.tel2);
let podeSerNulo = null; // vai ser do tipo ANY
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 1000,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silvia',
    contaBancaria: contaBancaria,
    contatos: ['32145685', '12454545']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
