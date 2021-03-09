// if...else

let temperature = 36.5

if(temperature >= 37) {
    console.log('Está com febre')
} else {
    console.log('Não está com febre')
}

let temperature2 = 37.4

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(temperature2 < 37.5 && temperature2 >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}