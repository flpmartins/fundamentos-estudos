//novo recurso do es2015
const pessoa = {
  nome: "ingrid",
  idade: 5,
  endereco: {
    logradouro: 'rua abc',
    numero: 1000
  }
}

const { nome, idade } = pessoa //dizendo para tirar os atributos da estrutura
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //atribuiu com uma constate nos atributos
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { logradouro, numero, } = pessoa.endereco
console.log(logradouro, numero, cep)