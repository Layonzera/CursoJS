/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const adryann = new Person("Adryann")
const mayk = new Person("Mayk")
console.log(adryann.walk())
console.log(mayk.walk())


// let name2 = new String("Adryann")
// console.log(name2)
// let date = new Date("2021-03-19")
// console.log(date)