let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let a = 1; a < numbers.length; a+=1) {
  for (let j = 0; j < numbers.length - a; j+=1 ) {
    if (numbers[j] > numbers[j + 1]) {
      let c = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = a;
    }
  }
}
for (let index = 0; index < numbers.length; index+=1) {
  console.log(numbers[index]);
}
