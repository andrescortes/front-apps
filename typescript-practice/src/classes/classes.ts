class Person {

  private name: String;

  constructor(name: String) {
    this.name = name;
  }

  public getName(): String {
    return this.name;
  }
  static getPI(): number {
    return 3.14;
  }
}

let person = new Person("Juan");
console.log(person.getName());
console.log(Person.getPI());