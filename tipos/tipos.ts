// string
let nome: string = 'joao'
console.log(nome)

//numbers
let idade: number = 27
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)


//tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["cozinhar", "esportes"]
console.log(hobbies)
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["AV Principal", 99, "Bloco A"]
console.log(endereco)

// enums
enum Cor{
    Cinza, //0
    Verde = 100, //100
    Azul = 10, //10
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

//any
let carro: any = "BMW"
console.log(carro)

carro = {marca: 'BMW', ano: 2019}
console.log(carro)

//funçoes
function retornaMeuNome(): string{
    return nome
}
console.log(retornaMeuNome())

function digaOI(): void{
    console.log("oi")
}
digaOI()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}
console.log(multiplicar(4.7,9))


//tipo função
let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5,6))

//objetos
let usuario: { nome: string, idade: number} = {
    nome: 'joao',
    idade: 27
}
console.log(usuario)

usuario = {
    idade: 31,
    nome: "ana"
}
console.log(usuario)


// Desafio 
// alias 
type Funcionario = {
    nomes: string[],
    baterPonto: (horas: number) => string
}


let funcionario: Funcionario  = {
    nomes: ['Ana', 'Silvio'],
    baterPonto(horario: number): string{
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do Horario'
        }
    }
}


let funcionario2: Funcionario  = {
    nomes: ['Isabela', 'Ana'],
    baterPonto(horario: number): string{
        if (horario <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do Horario'
        }
    }
}
 

console.log(funcionario.nomes)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))



// union types
let nota: number | string
nota = 10
console.log(`Minha nota e ${ nota }!`)
nota = 'dez'
console.log(`Minha nota e ${ nota }!`)



// Checando Tipos
let valor = 30

if (typeof valor === "number") {
    console.log("E um number")
} else {
    console.log(typeof valor)   
}


// never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabao',
    preco: 2,
    validarProduto(){
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco invalido!')
        }
    }
}

produto.validarProduto()



// Tipo Null
let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}


const contato1: Contato = {
    nome: 'Fulano',
    tel1: '32145879',
    tel2: null
}

console.log(contato1.nome, contato1.tel1, contato1.tel2)

let podeSerNulo = null // vai ser do tipo ANY
podeSerNulo= 12
console.log(podeSerNulo)
podeSerNulo= 'abc'
console.log(podeSerNulo)

//Desafio

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 1000,
    depositar(valor: number)  {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silvia',
    contaBancaria: contaBancaria,
    contatos: ['32145685', '12454545']
}

correntista.contaBancaria.depositar(2000)
console.log(correntista)
