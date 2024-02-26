let valor //não inicializada, resumindo nenhum valor atribuido a ela
console.log(valor)

valor = null//ausencia de valor
console.log(null) // sempre usar null quando quiser zerar o valor de uma variavel

const produto = {}
console.log(produto.preco)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
