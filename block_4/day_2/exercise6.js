let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numbers[i] % 2 === 0 ? (result += 0) : (result += 1);
}
result === 0
  ? console.log('nenhum valor ímpar encontrado')
  : console.log(result);
