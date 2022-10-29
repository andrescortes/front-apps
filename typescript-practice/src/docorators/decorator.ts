function SimpleDecorator(target: Function): void {
  target.prototype.saludar = function (): void {
    console.log("Hola");
  }
}

@SimpleDecorator
class Hi {
  constructor() {
  }

}

let hi = new Hi();
// hi.saludar();