let primeiroNumero = Number(prompt("Digite um número"))
let segundoNumero = Number(prompt("Digite outro número"))

const verificacao1 = primeiroNumero > segundoNumero
const verificacao2 = primeiroNumero === segundoNumero
const verificacao3=primeiroNumero % segundoNumero === 0
const verificacao4 = segundoNumero % primeiroNumero === 0

console.log(`O primeiro numero é maior que o segundo? ${verificacao1}`)
console.log(`O primeiro numero é igual ao segundo? ${verificacao2}`)
console.log(`O primeiro numero é divisível pelo segundo? ${verificacao3}`)
console.log(`O segundo numero é divisível pelo primeiro? ${verificacao4}`)