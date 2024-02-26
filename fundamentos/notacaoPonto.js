console.log(Math.ceil(6.1))//arredonda para o valor superior mais proximo, nesse caso 7

const obj1 = {}
obj1.nome = "bola"

console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('exec...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)//ao utilizar "." voce consegue acessar 
console.log(obj3.nome)