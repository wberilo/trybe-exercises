let n = 53;
let out = 'é primo';

for (let i = 0; i < n; i++) {
  if (n % i === 0 && i != 1) {
    out = 'não é primo';
  }
}
console.log(out);
