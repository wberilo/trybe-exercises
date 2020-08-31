let n = 14;
if (n % 2 === 0) {
  n += 1;
}
let out = '';
const h = Math.floor(n / 2);
const a = Math.ceil(n / 2);
let sp = 1;
for (let j = 0; j < a; j++) {
  out = '';
  let k = 0;
  for (k = 0; k < h - j; k++) {
    out += ' ';
  }
  if (j === 0) {
    out += '*';
  } else if (j === a - 1) {
    for (let u = 0; u < n; u += 1) {
      out += '*';
    }
  } else {
    out += '*';
    for (let u = 0; u < sp; u += 1) {
      out += ' ';
    }
    out += '*';
    sp += 2;
  }
  console.log(out);
}
