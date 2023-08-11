// por mais incrível que pareça, isso funciona por causa de algo chamado hoisting. mas com arrow functions não funcionaria
printName()

console.log("Hello")

function printName() {
    console.log('i am douglas')
}

// abaixo não funcionaria

printName()

console.log("Hello")

const printName = () => {
    console.log('i am douglas')
}
