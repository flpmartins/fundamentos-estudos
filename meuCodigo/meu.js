function loja(produto1, produto2, produto3) { //função da loja

  const camiseta = produto1 //produto1
  const calça = produto2 //produto2
  const bolsa = produto3 //produto3

  const soma = camiseta + calça - bolsa //soma dos produtos
  console.log(soma)
  return soma
}
loja(10/*valor atribuido a o produto 1*/, 20/*valor atribuido a o produto 2*/, 5/*valor atribuido a o produto 3*/)



//desafio 1
//Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.
//nota = 8/10
function soma(a, b) {
  const resultado = a + b
  console.log(resultado)
  return (resultado)
}
soma(2, 5)

//desafio 2
//Escreva um programa que use um loop for para imprimir os números de 1 a 10.
//nota = 10/10

for (let i = 1; i <= 10; i++) {
  console.log(i)
}



//desafio 3
//Crie uma função chamada maiorNumero que receba dois números como parâmetros e retorne o maior deles.
//nota = 4/10

function maiorNumero(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.log(maiorNumero(4, 6))




//desafio 4
//Escreva um programa que use um loop for para imprimir os números de 10 a 1 em ordem decrescente.
//nota = 10/10 
for (let i = 10; i >= 1; i--) {
  console.log(i)
}



//desafio 5
//Escreva um programa que peça ao usuário para digitar um número e, em seguida, 
//converta o número para inteiro. Utilize tratamento de erro para lidar com a possibilidade
// de o usuário digitar algo que não seja um número.
//nota = 2/10 //errei em bastante coisa

function enterNumber(number) {
  try {
    if (!Number.isInteger(number) && !Number.isSafeInteger(number)) {
      throw new Error('preciso de um numero inteiro ou seguro')
    }
  } catch (error) {
    console.log(error.message)
  }
}
enterNumber(4)

enterNumber(4)

enterNumber(4.5)

enterNumber('texto')

enterNumber(12345678901234567890)



//desafio 6
//Crie uma função chamada media que receba uma lista de números como parâmetro e retorne a média deles.
//nota = 8/10 

function media(a, b, c, d) {
  const somaTotal = a + b + c + d;

  const aritmetica = somaTotal / 4;

  return aritmetica;
}

console.log(media(10, 10, 10, 10))



//desafio 7
//Escreva um programa que use um loop for para imprimir os números pares de 1 a 20.
//nota = 10/10

for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}



//desafio 8
//Modifique a função maiorNumero do desafio 3 para incluir tratamento de erro. 
//Caso os parâmetros não sejam números, a função deve retornar uma mensagem de erro apropriada.
//nota = 6,5/10

function maiorNumero(a, b) {
  try {
    if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
      throw new Error('Preciso de números inteiros ou seguros')
    }
    if (a > b) {
      return a
    } else {
      return b
    }
  } catch (error) {
    console.log(error.message)
  }
}
console.log(maiorNumero(4, 6))



//listar nome da lista

const lista = ['filipe', 'ingrid', 'rodrigo', 'joão']

const nome = 'thomas'

console.log('chegou aqui')

for (let i = 0; i < lista.length; i++) {
  if (lista[i] == nome) {
    console.log("sucess")
  } else {
    console.log("false")
  }
}

console.log('outra função')



//listar o maior numero e a posição dele 

let listaNumber = [10, 20, 30, 40, 50];

let maiorNumber = listaNumber[0];
let posicao = -1;

for (let i = 1; i < listaNumber.length; i++) {
  if (listaNumber[i] > maiorNumber) {
    maiorNumber = listaNumber[i];
    posicao = i;
    console.log('success');
  } else {
    console.log('false');
  }
}

console.log("O maior número é:", maiorNumber);
console.log("A posição do maior número é:", posicao);

console.log("outra função")



//filtrar os nomes com base nos nomes que temos aquele determinado filtro

let listagem = ['alberto', 'juninho', 'claudio', 'filipe']

let filter = 'a'

for (i = 0; i < listagem.length; i++) {

  if (listagem[i].includes(filter)) {
    console.log(listagem[i] + " contém a letra 'a'");
  }
}