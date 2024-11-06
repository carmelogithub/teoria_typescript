function saludar(nombre: string):string {
    console.log(`Hola ${nombre}`);
    return `Hola ${nombre}`;
}

let saludo= saludar('Juan');
console.log(saludo);

interface Persona{
    nombre: string;
    apellido: string;
    edad: number;
}

const persona: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
};

console.log(`Nombre: ${persona.nombre}`); 