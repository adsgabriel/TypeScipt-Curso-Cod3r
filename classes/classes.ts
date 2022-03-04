class Data{
    // public por padrao
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);


// simplificar a classe

class DataEsperta{
    constructor(public dia: number = 1, public mes: number = 1,
        public ano: number = 1970){
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

//Desafio

class Produto{
    constructor(public nome: string, public preco: number, public desconto: number = 0){
    }

}

const produto1 = new Produto('Iphone 13',  6000);
produto1.desconto = 0.06
console.log(produto1);

const produto2 = new Produto('Macbook Pro', 15000, 0.2)
console.log(produto2);


