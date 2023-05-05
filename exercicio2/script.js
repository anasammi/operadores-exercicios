// Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

// ```
// O primeiro numero é maior que o segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
// ```

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