/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro
*/

console.log('9' + 5) // <-- o JS forçou transfromar o 5 em uma STRING. Houve uma type coersion *Coerção de Tipo*.

console.log(Number('9') + 5) // <-- Transformou a string '9' em um Number. Type Conversion *Conversão de Tipo*.