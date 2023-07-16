let length = 8.10
console.log(typeof length)

const frutas = ['maçã', 'abacaxi']
console.log(typeof frutas)

function Somar(x,y) {
    return x + y;
}
console.log(typeof Somar)

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    } 
}

console.log(typeof Rectangle)
console.log(typeof new Rectangle(40, 30))

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(typeof person)
console.log(typeof cars)
console.log(typeof date)

console.log(person.firstName)

const color = 'blue'
const type = 'volkswagen'

const car = {type:type, color:color}
console.log(car.type)
const colorOfObject = car['color']
console.log(colorOfObject)

const john = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(john.fullName())

const randomNumber = new Number(14)
console.log(randomNumber.valueOf())