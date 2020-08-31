let n = 7;
let out = '';
const h = Math.floor(n / 2);
const a = Math.ceil(n / 2);
let sp = 1;
for (let j = 0; j < a; j += 1) {
  out = '';
  let k = 0;
  for (k = 0; k < h - j; k += 1) {
    out += ' ';
  }
  for (let m = 0; m < sp; m += 1) {
    out += '*';
  }
  sp += 2;

  console.log(out);
}
