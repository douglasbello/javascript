const pessoa = {
	nome: 'Douglas',
	peso: 61,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000
	}
}

const { nome, peso } = pessoa
console.log(nome, peso)

const { nome: n, peso: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // sobrenome retornará undefined, bemHumorada retornará true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)