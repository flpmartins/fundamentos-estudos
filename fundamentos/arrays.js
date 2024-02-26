const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores)
console.log(valores.length)//length acessa a quantidade de uma funcionalidade como um array

valores.push({ id: 3 }, false, null, 'teste')//push serve para adicionar um objeto novo ao array
valores.log(valores)

console.log(valores.pop())//o pop pega o ultimo valor do array
delete valores[0]//deleta valor do array

console.log(typeof valores)