let n = 7;
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
  for (m = 0; m < sp; m++) {
    out += '*';
  }
  sp += 2;

  console.log(out);
}
