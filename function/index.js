import readonly from './readonly'
import nonenumerable from './nonenumerable'

// class Person {
//     @nonenumerable
//     get kidCount() { return this.children.length; }
// }

class Test{
    list=[1,2,3,4,5]

    @nonenumerable
    get sum(){
        return this.list.length
    }
}
const T = new Test()
console.log(T.sum)//5
