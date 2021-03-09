/* 
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Adryann')
name.surName = 'Layon'
let age = new Number(19)
console.log(name.surName, age)

let date = new Date('2021-03-09')
console.log(date.__proto__)