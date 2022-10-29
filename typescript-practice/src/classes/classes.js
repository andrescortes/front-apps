"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.getPI = function () {
        return 3.14;
    };
    return Person;
}());
var person = new Person("Juan");
console.log(person.getName());
console.log(Person.getPI());
