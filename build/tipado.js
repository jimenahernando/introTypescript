// boolean
let esValido = true;
esValido = false;
// number, se pueden expresar en decimal, hexa, binario
let edad = 35;
// string
let nombre = 'Gustavo';
let apellido = 'Lopez';
let nombre_completo = `${nombre} ${apellido}`;
// array
let numeros = [1, 25, 36, 47];
// let numeros: number[] = [1, 25, 36, 'jimena']; da error
let numero2 = [0, 2, 4, 6, 8, 10];
// tuplas (array de dos elementos, de posiciones fijas)
let sitio = ['Casa', 08017];
// enum
var Estado;
(function (Estado) {
    Estado[Estado["offline"] = 0] = "offline";
    Estado[Estado["undefined"] = 1] = "undefined";
    Estado[Estado["online"] = 2] = "online";
})(Estado || (Estado = {}));
let stat = Estado.online;
//nos devuelve la posicion, en este caso 2 ya que si no se lo asignamos comienza en 0 y es autoincremental
console.log(stat);
var EstadoLaboral;
(function (EstadoLaboral) {
    EstadoLaboral[EstadoLaboral["desempleado"] = 1] = "desempleado";
    EstadoLaboral[EstadoLaboral["empleado"] = 3] = "empleado";
    EstadoLaboral[EstadoLaboral["autonomo"] = 4] = "autonomo";
    EstadoLaboral[EstadoLaboral["paro"] = 2] = "paro";
})(EstadoLaboral || (EstadoLaboral = {}));
let situacionActual = EstadoLaboral.desempleado;
let situacionMañana = EstadoLaboral.empleado;
console.log(situacionActual);
console.log(situacionMañana);
// Unknown
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = false;
let nuevaCadena = 'esta es otra cadena';
// nuevaCadena = sinTipo no te permite asignarle una variable no tipada a una que si
// Any
let tipoIndefinido = 'esto es un mensaje';
nuevaCadena = tipoIndefinido;
// void
function logger() {
    console.log('Hola Logger');
}
