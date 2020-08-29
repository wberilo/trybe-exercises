let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index++) {
  result += numbers[index];
}
result > 20
  ? console.log("valor maior que 20")
  : console.log("valor menor ou igual a 20");
