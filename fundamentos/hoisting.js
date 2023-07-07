console.log('a =', a) // retorna undefined, mas a variável 'a' existe por causa do hoisting
var a = 2
console.log('a =,' a) // retorna o 2


// o código de cima seria a mesma coisa que o código abaixo por causa do hoisting
// var a
// console.log('a =,' a)
// a = 2
// console.log('a =,' a)