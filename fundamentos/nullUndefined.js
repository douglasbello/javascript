let valor
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) vai retornar um erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)