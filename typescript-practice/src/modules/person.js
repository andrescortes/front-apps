"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
}
exports.Persona = Persona;
