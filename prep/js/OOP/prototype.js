function Person(name) {
  this.name = name;
}

Object.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};
Person.prototype.sayBye = function () {
  console.log("Bye, I'm " + this.name);
};
Person.prototype.sayNai = function () {
  console.log("Nai, I'm " + this.name);
};

const p1 = new Person("Saugat");
p1.sayHi(); // "Hi, I'm Saugat"

console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
