const randomNumber = () => Math.ceil(Math.random()*100)// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

module.exports = {randomNumber,isDivisible}