let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 50;

for (let index = 0; index < numbers.length; index += 1) {
  if (result >= numbers[index]) {
    result = numbers[index];
  }
}
console.log(result);
