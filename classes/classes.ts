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

    precoComDesconto(): number{
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto} (${this.desconto * 100}%off)`
    }
}

const produto1 = new Produto('Iphone 13',  6000);
produto1.desconto = 0.06
console.log(produto1.resumo());

const produto2 = new Produto('Macbook Pro', 15000, 0.2)
console.log(produto2);

class Carro{
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string,
        private velocidadeMaxima: number = 200) {

        }

        private alterarVelocidade(delta: number): number {
            const novaVelocidade = this.velocidadeAtual + delta
            const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima

            if(velocidadeValida){
                this.velocidadeAtual = novaVelocidade
            }else{
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
            }

            return this.velocidadeAtual;
        }

        public acelerar(): number{
            return this.alterarVelocidade(5);
        }

        public frear(): number {
            return this.alterarVelocidade(-5);
        }
}

const carro1 = new Carro('Ford', 'Mustang', 250);

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar());

