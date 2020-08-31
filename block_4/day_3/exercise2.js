let n = 5;
let out = '';
for (let j = 0; j < n; j += 1) {
  out = '';
  for (let i = 0; i < j + 1; i += 1) {
    out += '*';
  }
  console.log(out);
}
