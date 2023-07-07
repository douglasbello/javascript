{{{{{	var sera = 'Será???'	}}}}}

console.log(sera) // apesar da variável sera estar em um escopo diferente, nesse caso é possível acessá-la

console.log(sera)

function teste() {
	var local = 123
	console.log(local) // aqui funciona obviamente
}

teste()
console.log(local)