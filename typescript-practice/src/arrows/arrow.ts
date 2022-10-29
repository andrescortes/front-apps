let sum = function (a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));

let sumArrow = (a:number, b:number) => a + b;
console.log(sumArrow(1, 2));

var getName = function (){
  return 'Carl';
}

console.log(getName());

let getNameArrow = () => 'John';
console.log(getNameArrow());