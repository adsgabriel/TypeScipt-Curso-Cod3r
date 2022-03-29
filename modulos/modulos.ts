// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circunferencia";
import { areaCircunferencia as circ } from "./circunferencia";
import retangulo from './retangulo'

console.log('modulo carregado ')
console.log(circ(2))
console.log(retangulo(7,5))



const { digaOi } = require('./novo')
console.log(digaOi(' Ana'))