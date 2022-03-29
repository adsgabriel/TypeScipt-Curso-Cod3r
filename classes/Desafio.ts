// Exerc団io 1 - Classe
class Moto {
    public velocidade: number = 0

    constructor(public nome: string){
      
    }
 
    buzinar() {
        console.log('Toooooooooot!')
    }
 
    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}
 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exerc団io 2 - Heran溝
abstract class objeto2D {
    
constructor(public base: number = 0, public altura: number = 0){
}
    abstract area(): number
}
 
class Retangulo extends objeto2D{
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(10,7)
console.log(retangulo.area())


// Exerc団io 3 - Getters & Setters

class Estagiario{
    private _primeiroNome: string = ''

    get primeiroNome(){
        return this._primeiroNome
    }

    set primeiroNome(valor){
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario1 = new Estagiario
estagiario1.primeiroNome = 'Le'
console.log(estagiario1.primeiroNome)
estagiario1.primeiroNome = 'Leonardo'
console.log(estagiario1.primeiroNome)
