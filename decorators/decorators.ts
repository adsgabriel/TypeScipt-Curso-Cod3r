
function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse: decoratorVazio
}

function decorator(obj: { a: string, b?: number }) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}


type Constructor = { new(...args: any[]): {} }

function logarObjeto(constructor: Constructor){
    console.log('Carregado...')
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico {
    imprimir?(): void
}

// @logarClasse
// @decorator({ a: 'Teste", b: 123 })
// @logarClasseSe(false)
// @logarObjeto
// @imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

//(<any>new Eletrodomestico()).imprimir()
const eltro = new Eletrodomestico()
eltro.imprimir && eltro.imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}
 
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo critico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão')
            }
        }
    }
}


class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false            
        }
    }

    @congelar
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10000.00)
cc.sacar(2000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }

console.log(cc.getSaldo())


//Obejct.freeze()
function congelar(alvo: any, nomePropriedade: string,
    descritor: PropertyDescriptor){
        console.log(alvo)
        console.log(nomePropriedade)
        descritor.writable = false
    }

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if (valor < 0) {
                throw new Error('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}


function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number ) {
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Indice Param: ${indiceParam}`)
}










