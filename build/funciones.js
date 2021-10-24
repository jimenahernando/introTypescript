// function sumar (a, b) {
//     return a + b;
// }
//sobran muchas cosas
const sumar = function (a, b) {
    return a + b;
};
//la más utilizada
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
console.log(sumar2(3, 4));
// Parametros Opcionales y valores por defecto
function nombreCompleto(nombre, apellido, edad = 38) {
    if (apellido)
        return `${nombre} ${apellido} de ${edad} años`;
    else
        return `${nombre} de ${edad} años`;
}
console.log(nombreCompleto('jimena'));
console.log(nombreCompleto('cecilia', 'hernando'));
// Parametros REST, como un array
function nombreCompleto2(nombre, ...restoApellidos) {
    return nombre + '' + restoApellidos.join(' ');
}
console.log(nombreCompleto2('Maria Fernanda', 'Riera', 'Mercadal'));
