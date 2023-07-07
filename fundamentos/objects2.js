console.log(typeof Object) // -> retorna function
console.log(typeof new Object()) // retorna object

const Cliente = function() {}
console.log(typeof Cliente) // -> function
console.log(typeof new Cliente()) // -> object

class Produto {}
console.log(typeof Produto) // -> function
console.log(typeof new Produto) // -> object