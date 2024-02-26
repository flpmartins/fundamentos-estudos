console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () {
}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto { } //uma classe é uma forma mais rapida de fazer uma função, mas por debaixo dos panos é uma função
//internamente da classe voce tem uma função, e instanciando a classe voce tem um objeto
console.log(typeof Produto)
console.log(typeof new Produto())