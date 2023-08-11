function multiply(num1, num2) {
    const result = num1 * num2;
    return result
}

// que loucura
function print() {
    console.log(arguments)
}

print('hello', 400, false)


const obj = {
    name: 'douglas',
    age: 19,
    print: function() {
        console.log(this)
    }
}

obj.print()
