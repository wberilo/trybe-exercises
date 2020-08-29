let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      // troque o < por > na linha acima para inverter resultado
      let a = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = a;
    }
  }
}
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
