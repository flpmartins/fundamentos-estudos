const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

//Number.isInteger indentifica se o numero é inteiro

const avaliacao1 = 9.212
const avaliacao2 = 6.32131

const total = avaliacao1 * peso1 + avaliacao2 + peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(3))

//toFixed serve para limitar a quantia de casas decimais que serão exibidas