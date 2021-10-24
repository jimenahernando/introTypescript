// boolean
let esValido: boolean = true;
esValido = false;

// number, se pueden expresar en decimal, hexa, binario
let edad: number = 35;

// string
let nombre: string = 'Gustavo';
let apellido: string = 'Lopez';

let nombre_completo = `${nombre} ${apellido}`;

// array
let numeros: number[] = [1, 25, 36, 47];
// let numeros: number[] = [1, 25, 36, 'jimena']; da error

let numero2: Array<number> = [0, 2, 4, 6, 8, 10];

// tuplas (array de dos elementos, de posiciones fijas)
let sitio: [string, number] = ['Casa', 08017];

// enum
enum Estado {
    offline,
    undefined,
    online
}

let stat: Estado = Estado.online;
//nos devuelve la posicion, en este caso 2 ya que si no se lo asignamos comienza en 0 y es autoincremental
console.log(stat);

enum EstadoLaboral {
    desempleado = 1,
    empleado = 3,
    autonomo = 4,
    paro = 2
}

let situacionActual: EstadoLaboral = EstadoLaboral.desempleado;
let situacionMañana: EstadoLaboral = EstadoLaboral.empleado;
console.log(situacionActual);
console.log(situacionMañana);

// Unknown
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = false;

let nuevaCadena: string = 'esta es otra cadena';
// nuevaCadena = sinTipo no te permite asignarle una variable no tipada a una que si

// Any
let tipoIndefinido: any = 'esto es un mensaje';
nuevaCadena =tipoIndefinido;

// void
function logger(): void {
    console.log('Hola Logger');
}
