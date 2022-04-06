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

        protected alterarVelocidade(delta: number): number {
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


class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <=120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 19;
console.log(pessoa1.idade)

// Atributos e metodos estaticos

class  Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

//Chamada quando nao se usa o metodo estatico
//console.log(new Matematica().areaCIrc(4))

// Chamada quando se usa o metodo estatico
console.log(Matematica.areaCirc(4))

// Classe Abstrata

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicar extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicar()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())


//Singleton

class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())


//Somente leitura

class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefeixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
console.log(turboHelice)