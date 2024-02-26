//par nome/valor

const saudacao = 'Opa' //contexto léxico 1 (léxico significa físico)

function exec() {
  const saudacao = 'fala' //contexto léxico 2
  return saudacao
}

//objetos são grupos aninhados de pares indentificador/valor 

const cliente = {
  nome: 'pedro',
  idade: 32,
  peso: 90,
  enderco: {
    logradouro: 'rua muito legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)