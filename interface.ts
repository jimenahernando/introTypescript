interface Persona {
    nombre: string;
    apellido: string;
    edad: number
}

function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Lucia', apellido:'Biolatto', edad: 16});

let jimena = {
    nombre: 'Jimena',
    apellido: 'Hernando',
    edad: 35
}

mostrarPersona(jimena);

// Propiedades opcionales
interface Coche {
    marca: string;
    modelo: string;
    color?: string //el simbolo ? indica que la propiedad es opcional
}

function mostrarCoche(pCoche: Coche){
    console.log(`Marca: ${pCoche.marca}. Modelo: ${pCoche.modelo}`);
    if(pCoche.color){
        console.log(`Color: ${pCoche.color}`);
    }
}

mostrarCoche({ marca: 'Peugeot', modelo: '205'});
mostrarCoche({ marca: 'Fiat', modelo: 'Duna', color: 'rojo'});

// Propiedades de solo lectura
interface Punto {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto = { x: 3, y: 121 };
// punto1.x = 34;

// Definir una funcion
interface Busqueda {
    (valor: string, buscar: string) : boolean;
}

const miBusqueda: Busqueda = ( v: string, b: string ) : boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('Hola amigos del acuario', 'ola'));

// interface en una clase
interface Humano {
    nombre: string;
    edad: number
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    tieneCoche: boolean;
    
    constructor(pNombre: string, pEdad: number, pTieneCoche: boolean){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.tieneCoche = pTieneCoche;
    }
}
class Niño implements Humano{
    nombre: string;
    edad: number;
    colegio: string;

    constructor(pNombre: string, pEdad: number, pColegio: string) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pColegio;
    }
}

let Ronan: Adulto = { nombre: 'Ronan', edad: 29, tieneCoche: true };
console.log(Ronan);