export class Persona {
  private name: string;
  private lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  public getName(): string {
    return this.name;
  }

  public getLastName(): string {
    return this.lastName;
  }
}