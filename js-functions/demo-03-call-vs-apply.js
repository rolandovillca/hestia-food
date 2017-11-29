var person1 = {
  name: 'Marvin',
  age: 42,
  size: '2xM'
};

var person2 = {
  name: 'Zaphod',
  age: 42000000000,
  size: '1xS'
};

var sayHello = function () {
  console.log('Hello', this.name);
};

var sayGoodBye = function () {
  console.log('Good Bye', this.name);
};

console.log('Print without scope - with no call  nor apply');
sayHello();
sayGoodBye();
console.log();

console.log('Print with scope - with call function');
sayHello.call(person1)
sayGoodBye.call(person2)
console.log();

console.log('Print with scope - with apply function');
sayHello.apply(person1);
sayGoodBye.apply(person2);
console.log();