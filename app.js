function saludar(nombre) {
    console.log("Hola ".concat(nombre));
    return "Hola ".concat(nombre);
}
var saludo = saludar('Juan');
console.log(saludo);
var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
};
console.log("Nombre: ".concat(persona.nombre));
