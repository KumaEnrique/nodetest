const math = require('./math')

console.log(math.add(2,99))

const men = new math.Persona()
console.log(men.saludar())

const [nombre] = math.array
console.table(nombre)

const Cosa  = require('./functions')
const palo = new Cosa.Cosa()
console.log(palo.tipo())