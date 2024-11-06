//tipado estático - indicamos el tipo de dato a la variable en tiempo de compilación
let nombre: string = 'Juan'; //let permite gestionar la sobrescritura de la variable
//el tipo de dato es explícito

//precio=15;//error de compilación porque NO se ha asignado el tipo de dato a la variable precio
let precio: number = 15; //el tipo de dato es explícito

//inferencia de tipos
let nombre2 = 'Juan'; //el tipo de dato es implícito
//TypeScript es capaz de inferir el tipo de dato de la variable en tiempo de compilación

//Interfaces - definen la forma de un objeto
//ayuda a definir estructuras más claras y fáciles de mantener
interface Persona {
    nombre: string;
    edad: number;
}
const persona: Persona = {
    nombre: 'Juan',
    edad: 30
}

//Clases - POO - Soporta de clases de ES6 y también modificadores de acceso (public, private, protected)

//Generics - crea funciones y métodos que pueden trabajar con diferentes tipos de datos sin perder 
//la capacidad de ser tipados - util para reutilizar código con varios tipos de datos diferentes
function imprimir<T>(dato: T):void {
    console.log(dato);
}
imprimir('Hola Mundo');
imprimir(15);

//Uniones de tipos - una variable que puede tener diferentes tipos de datos
let dato: string | number;
dato = 'Juan';
dato = 15;
dato=true;

//funciones anónimas y arrow functions - sintasis más concisa
const sumar = (a: number, b: number): number => a + b;

//Decoradores - permite extender la funcionalidad de una clase sin modificar su estructura
//característica que añade funcionalides a una clase en modo declarativo

function log(target:any,propertyKey:string, descriptor:PropertyDescriptor):void {
    console.log('Hola Mundo');
}

class Persona2 {
    @log
    saludar():void {
        console.log('Hola a todos');
    }
}

//null - undefined
//TypeScript NO permite asignar null o undefined a una variable si no se ha indicado que puede ser nula

let ciudad:string | null='Madrid';
ciudad=null; //error de compilación

//Módulos
//TypeScript permite importar y exportar módulos - módulos nativos de JavaScript

export class Persona3 {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}


//fichero index.ts
import { Persona3 } from './teoria'; //importamos la clase Persona3 del fichero teoria.ts
const persona3 = new Persona3('Juan');
console.log(persona3.nombre);