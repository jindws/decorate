// // @testable
// class MyTestableClass {
//   // ...
// }
//
// function testable(target) {
//   target.isTestable = true;
// }
//
// testable(MyTestableClass)
// console.log(MyTestableClass.isTestable);

// function testable(isTestable) {
//   return function(target) {
//     target.isTestable = isTestable;
//   }
// }
//
// @testable(true)
// class MyTestableClass {}
// console.log('MyTestableClass.isTestable',MyTestableClass.isTestable )// true
//
// @testable(false)
// class MyClass {}
// console.log('MyClass.isTestable',MyClass.isTestable )// false

function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
console.log(obj.isTestable) // true