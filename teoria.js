"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona3 = void 0;
//tipado estático - indicamos el tipo de dato a la variable en tiempo de compilación
var nombre = 'Juan'; //let permite gestionar la sobrescritura de la variable
//el tipo de dato es explícito
//precio=15;//error de compilación porque NO se ha asignado el tipo de dato a la variable precio
var precio = 15; //el tipo de dato es explícito
//inferencia de tipos
var nombre2 = 'Juan'; //el tipo de dato es implícito
var persona = {
    nombre: 'Juan',
    edad: 30
};
//Clases - POO - Soporta de clases de ES6 y también modificadores de acceso (public, private, protected)
//Generics - crea funciones y métodos que pueden trabajar con diferentes tipos de datos sin perder 
//la capacidad de ser tipados - util para reutilizar código con varios tipos de datos diferentes
function imprimir(dato) {
    console.log(dato);
}
imprimir('Hola Mundo');
imprimir(15);
//Uniones de tipos - una variable que puede tener diferentes tipos de datos
var dato;
dato = 'Juan';
dato = 15;
dato = true;
//funciones anónimas y arrow functions - sintasis más concisa
var sumar = function (a, b) { return a + b; };
//Decoradores - permite extender la funcionalidad de una clase sin modificar su estructura
//característica que añade funcionalides a una clase en modo declarativo
function log(target, propertyKey, descriptor) {
    console.log('Hola Mundo');
}
var Persona2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _saludar_decorators;
    return _a = /** @class */ (function () {
            function Persona2() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Persona2.prototype.saludar = function () {
                console.log('Hola a todos');
            };
            return Persona2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _saludar_decorators = [log];
            __esDecorate(_a, null, _saludar_decorators, { kind: "method", name: "saludar", static: false, private: false, access: { has: function (obj) { return "saludar" in obj; }, get: function (obj) { return obj.saludar; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
//null - undefined
//TypeScript NO permite asignar null o undefined a una variable si no se ha indicado que puede ser nula
var ciudad = 'Madrid';
ciudad = null; //error de compilación
//Módulos
//TypeScript permite importar y exportar módulos - módulos nativos de JavaScript
var Persona3 = /** @class */ (function () {
    function Persona3(nombre) {
        this.nombre = nombre;
    }
    return Persona3;
}());
exports.Persona3 = Persona3;
//fichero index.ts
var teoria_1 = require("./teoria"); //importamos la clase Persona3 del fichero teoria.ts
Object.defineProperty(exports, "Persona3", { enumerable: true, get: function () { return teoria_1.Persona3; } });
var persona3 = new teoria_1.Persona3('Juan');
console.log(persona3.nombre);
