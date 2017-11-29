// EXAMPLE 1: Creating a bound function:
// =============================================================================
this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  }
}

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();

// 9, becuase in this case, "this" refers to the global obejct.

// Create a new function with "this" bound to module.
// New programmers might confuse the global var x with module's property x.
var boundGetX = retrieveX.bind(module);
var result = boundGetX(); // 81
console.log(result);
console.log();


// EXAMPLE 2: Partially applied functions:
// =============================================================================
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);

// Create a function with a present leading argument:
var leadingThirtySevenList = list.bind(undefined, 37);
var list2 = leadingThirtySevenList(); // [37]
var list3 = leadingThirtySevenList(1, 2, 3); // [37, 1, 2, 3]
console.log(list1);
console.log(list2);
console.log(list3);
console.log();


// EXAMPLE 3: With setTimeout:
// =============================================================================
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second:
LateBloomer.prototype.bloom = function () {
  setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log('I am a beautiful flower with ' + this.petalCount + ' petails!');
};

var flower = new LateBloomer();
flower.bloom();
console.log();


// EXAMPLE 4: Bound functions used as constructors:
// =============================================================================
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
var mystring = p.toString(); // '1,2'
console.log(mystring);
console.log();

var emptyObj = {};
var YAxisPoint = Point.bind(null, 0/*x*/);
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true

YAxisPoint(13);
console.log(emptyObj.x + ',' + emptyObj.y);
console.log();