// Crie uma função que verifique
// corretamente o tipo de dado
const carros = ['Uno', 'Gol', 'Onix', 'Cruze']

console.log(Object.prototype.toString.call(carros));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
    lados: 4
}
const congelado = Object.freeze(quadrado)

quadrado.lados = 6

function criarQuadrado (perimetro){
    lados = quadrado.lados
    return perimetro * lados
}

console.log(criarQuadrado(1))

// Previna qualquer mudança
// no objeto abaixo


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))