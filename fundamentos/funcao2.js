//armazenar função em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)

//amarzenando uma função arrow fuction em uma variavel
const soma = (a, b) => { return a + b }
console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(soma(2, 3))
//arrow functions  não são nada mais do que funções sem a palavra "fuction"

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')