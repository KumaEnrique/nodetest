const Math = {}
function add(x1,x2){
    return x1 + x2;
}
function subs(x1,x2){
    return x1 - x2;
}
function mul(x1,x2){
    return x1 * x2;
}
function square(x1,x2){
    return x1 ** x2;
}
/* Math.add=add
Math.subs=subs
Math.mul=mul
Math.square=square

module.exports=Math */
exports.add=add;//dos formas de exportar
class Persona {
    saludar(){
        return 'hola como estas '
    }
}
exports.Persona=Persona

const array = ['luis enrique','kuman hoy','desempleado']
exports.array=array