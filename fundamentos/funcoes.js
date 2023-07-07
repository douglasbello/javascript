function imprimirSoma(a, b) {
	console.log(a + b)
}

imprimirSoma(9,2)


function soma(a, b = 0) {
	return a + b
}

console.log(soma(1))
console.log(soma(4,6))