class Animal {
    constructor(name, numOfLegs) {
        this.name = name
        this.numOfLegs = numOfLegs
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }
}

const Dog = new Animal('Bingo', 4)
const Bird = new Animal('Steer', 2)

Dog.sayName()

Bird.sayName()

// o construtor de uma classe não pode ser uma arrow function, precisa ser uma função normal, já os métodos podem ser tanto
// arrow quanto funções normais.
