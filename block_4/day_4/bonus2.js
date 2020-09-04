function add(num1, num2) {
  let num1s = num1.toString();
  let num2s = num2.toString();
  let leng = 0;
  let out = [];
  num1s.length > num2s.length ? (leng = num1s.length) : (leng = num2s.length);
  for (let i = leng; i > 0; i -= 1) {
    let a = 0;
    let b = 0;
    if (typeof num1s[num1s.length - i] === 'undefined') {
      a = 0;
    } else {
      a = num1s[num1s.length - i];
    }
    if (typeof num2s[num2s.length - i] === 'undefined') {
      b = 0;
    } else {
      b = num2s[num2s.length - i];
    }
    out.push(parseInt(a) + parseInt(b));
  }
  let outs = '';
  for (let k in out) {
    outs += out[k];
  }
  return parseInt(outs);
}
console.log(add(25 , 16));
