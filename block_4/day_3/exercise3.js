let n = 10;
let out = '';
for (let j = 0; j < n; j += 1) {
  out = '';
  for (let i = 0; i < n - j - 1; i += 1) {
    out += ' ';
  }
  for (let k = 0; k < j + 1; k += 1) {
    out += '*';
  }
  console.log(out);
}
