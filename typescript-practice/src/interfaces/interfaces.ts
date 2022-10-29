interface User {
  name: string;
  password: string;
  confirmPassword?: string;
}

let user1: User = {
  name: "Juan",
  password: "123456"
};

console.log(user1);
console.log(user1.name);

interface UpAll {
  upTransport(): void;
}

let auto: UpAll = {
  upTransport() {
    console.log("Up All in auto");
  }
}

auto.upTransport();