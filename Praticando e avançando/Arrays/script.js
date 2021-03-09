// Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do Array
console.log(animals[0]) // vai mostrar o primeiro elemento do Array, no caso o LION.
console.log(animals.length) // se eu quiser saber a quantidade total de elementos do Array, uso length para saber a quantidade total.

console.log(animals[2].name) // se eu tenho um objeto dentro de um Array, e se eu quiser acessar a propriedade daquele objeto, é dessa forma que eu faço.
