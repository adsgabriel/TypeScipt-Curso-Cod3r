// let & const
let seraQuepode = 'P'
console.log(seraQuepode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}

const cpf: string = '123.123.000-99'
console.log(cpf)



var sergredo = 'externo'
function revelar() {
    let sergredo = 'interno'
    console.log(sergredo)
}
revelar();
console.log(sergredo);


for(let i = 0; i < 10; i++){
    console.log(i)
}


// Arrow functions

function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2,2));

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2,3))

const saudacao = () => console.log('ola')
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('Silvio')

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

function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio)
    while(inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(3)


//Rest & Spread

const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string[] = ['Ana','Thaisa','Sofia']
const turmaB: string[] = ['Izabela', 'Matheus', 'Djhulia', ...turmaA]

console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}

const numeros = retornarArray(1, 2, 3, 10, 23, 50)
console.log(numeros)
console.log(retornarArray(...numbers))


//Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)