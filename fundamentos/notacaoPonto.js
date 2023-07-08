 const obj1 = {}
 obj1.nome = 'Bola'
 // obj1['nome'] = 'Bola2' -> os dois fazem a mesma coisa, então nesse caso a chave 'nome' seria Bola2


 function Pessoa(nome,idade,peso) {
 	this.nome = nome
 	this.idade = idade
 	this.peso = peso
 	this.exec = function() {
 		console.log('Exec...')
 	}
 }

 console.log(new Pessoa('Douglas',19,61))

 const pessoa2 = new Pessoa('Maria',55,68)
 console.log(pessoa2.nome)
 pessoa2.exec()