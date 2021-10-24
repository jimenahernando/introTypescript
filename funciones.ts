// function sumar (a, b) {
//     return a + b;
// }

//sobran muchas cosas
const sumar: (a: number, b: number) => number = function (a: number, b:number): number {
    return a + b;
}

//la más utilizada
const sumar2 = function (a: number, b:number) : number {
    return a + b;
}

const sumar3: (a: number, b: number) => number = function (a, b) {
    return a + b;
}

console.log(sumar2(3, 4));

// Parametros Opcionales y valores por defecto
function nombreCompleto(nombre: string, apellido?: string, edad = 38) : string {
    if (apellido) return `${nombre} ${apellido} de ${edad} años`;
    else return `${nombre} de ${edad} años`;
}

console.log(nombreCompleto('jimena'));
console.log(nombreCompleto('cecilia', 'hernando'));

// Parametros REST, como un array
function nombreCompleto2(nombre: string, ...restoApellidos: string[]) : string {
    return nombre + '' + restoApellidos.join(' ');
}
//Riera y Mercadal forman parte del array de strigns denominado apellidos
console.log(nombreCompleto2('Maria Fernanda ', 'Riera', 'Mercadal'));