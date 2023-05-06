const operacao1 = 5 > 20 && 5 < 2; //false
const operacao2 = 5 === 5 || 5 === "5"; //true
const operacao3 = !(20 > 50); //true
const operacao4 = !(20 > 50 || 50 > 60); //true

// console.log(operacao1, operacao2, operacao3, operacao4);

//----------------------------

let numeroFilhos = 2
let salario = 2000
const comissao = 0.1
const desconto = 0.05
const auxilioCreche = 45.5 * numeroFilhos

const auxilioMaisSalario = auxilioCreche + salario
console.log(`Auxílio-creche + salário: ${auxilioMaisSalario}`)

const comissaoJaneiro = 5784.5 * comissao
const comissaoFevereiro = 3418.41 * comissao
const comissaoMarco = 4124.1 * comissao
const comissaoAbril = 1874 * comissao
const comissaoMaio = 7000 * comissao
const comissaoJunho = 9450*comissao


console.log(`Comissão do mês de janeiro: ${comissaoJaneiro}`)

const salarioJaneiro = salario + comissaoJaneiro
const descontoJaneiro = salarioJaneiro * desconto
const salarioTotalJaneiro = salarioJaneiro - descontoJaneiro + auxilioCreche

const salarioFevereiro = salario + comissaoFevereiro
const descontoFevereiro = salarioFevereiro * desconto
const salarioTotalFevereiro = salarioFevereiro - descontoFevereiro+ auxilioCreche

const salarioMarco = salario + comissaoMarco
const descontoMarco = salarioMarco * desconto
const salarioTotalMarco = salarioMarco - descontoMarco+ auxilioCreche

const salarioAbril = salario + comissaoAbril
const descontoAbril = salarioAbril * desconto
const salarioTotalAbril = salarioAbril - descontoAbril+ auxilioCreche

const salarioMaio = salario + comissaoMaio
const descontoMaio = salarioMaio * desconto
const salarioTotalMaio = salarioMaio - descontoMaio+ auxilioCreche

const salarioJunho = salario + comissaoJunho
const descontoJunho = salarioJunho * desconto
const salarioTotalJunho = salarioJunho - descontoJunho+ auxilioCreche


console.log(`Salário total de Janeiro: ${salarioTotalJaneiro}`);
console.log(`Salário total de Fevereiro: ${salarioTotalFevereiro}`);
console.log(`Salário total de Março: ${salarioTotalMarco}`);
console.log(`Salário total de Abril: ${salarioTotalAbril}`);
console.log(`Salário total de Maio: ${salarioTotalMaio}`);
console.log(`Salário total de Junho: ${salarioTotalJunho}`);

const mediaSalarial = (salarioTotalJaneiro + salarioTotalFevereiro + salarioTotalMarco + salarioTotalAbril + salarioTotalMaio + salarioTotalJunho) / 6

console.log(mediaSalarial);

