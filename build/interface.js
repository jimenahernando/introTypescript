function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Lucia', apellido: 'Biolatto', edad: 16 });
let jimena = {
    nombre: 'Jimena',
    apellido: 'Hernando',
    edad: 35
};
mostrarPersona(jimena);
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
}
mostrarCoche({ marca: 'Peugeot', modelo: '205' });
mostrarCoche({ marca: 'Fiat', modelo: 'Duna', color: 'rojo' });
let punto1 = { x: 3, y: 121 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('Hola amigos del acuario', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pTieneCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.tieneCoche = pTieneCoche;
    }
}
class Niño {
    constructor(pNombre, pEdad, pColegio) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pColegio;
    }
}
let Ronan = { nombre: 'Ronan', edad: 29, tieneCoche: true };
console.log(Ronan);
