import mixin from './mixin'

const Foo = {
    age:10,
    call:function (){console.log(this.age)}
}

@mixin(Foo)
class Class{}

new Class().call()//10


// const Foo = {
//     age:10,
//     call:function (){console.log(this.age)}
// }
//
// class Class {}
//
// Object.assign(Class.prototype, Foo);
//
// let obj = new MyClass();
// obj.call() // '10'
