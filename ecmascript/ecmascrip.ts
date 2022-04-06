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

//Destructuring (array)

const caracteristicas = ['Motor Zetec 1.8', 2020]
//const motor = caracteristica[0]
//const ano = caracteristica[1]

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

//Destructuring (objeto)

const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}

const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);

const { nome: n, preco: p, caracteristicas: { w } } = item

console.log(n, p, w)


//Template String

const usuarioID: string = 'Suporte';
const notificacoes: string = '19'
/* const boasVindas = 'Boas vindas' + usuarioID + 'Notificações: ' + notificacoes */

const boasVindas = `
Boas Vindas ${usuarioID}, 
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;

console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas}`)

//Desafio 

//1)
const dobro = (valor: number):number => valor * 2;
console.log(dobro(20));

//2)
const dizerOla = function(nome: string = 'Pessoa'): void {
    console.log("Ola, " + nome)
}
dizerOla();
dizerOla("Ana Luiza")

//3)
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums));

//4)
    
const array = [55, 20]
array.push(...nums)
console.log(array)

//5)
const notas = [8.5, 6.3, 9.4]
const [notas1, notas2, notas3] = notas
console.log(notas1, notas2, notas3)

 //6)
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)


//Callback

// function espera3s( callback: (dado: string) => void){
//     setTimeout(() =>{
//         callback('3s depois...')
//     },3000)
// }

// espera3s( function(resultado: string){
//     console.log(resultado)
// })


// function espera3sPromise() {
//     return new Promise ((resolve: any) => {
//         setTimeout(() =>{
//             resolve('3s depois promise...')
//         },3000)
//     })
// }

// espera3sPromise().then(dado => console.log(dado));


// fetch('https://swapi.dev/api/people/1')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(err => console.log('Catch!!!!' + err))