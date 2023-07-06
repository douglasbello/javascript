const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // retorna o valor unicode do char
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat("= ").concat(escola))
console.log(escola.replace("c","e"))

console.log("Ana,Maria,Pedro".split(","))