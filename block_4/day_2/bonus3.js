let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index + 1] > 0 || numbers[index + 1] <= 0) {
    newNumbers.push(numbers[index] * numbers[index + 1]);
  } else {
    newNumbers.push(numbers[index] * 2);
  }
}

for (let index = 0; index < newNumbers.length; index += 1) {
  console.log(newNumbers[index]);
}
