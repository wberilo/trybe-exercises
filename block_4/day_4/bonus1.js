function roman(a) {
  let out = 0;
  let b = a.replace('IV', 'IIII');
  b = b.replace('IX', 'IIIIIIIII');
  b = b.replace('XL', 'XXXX');
  b = b.replace('XC', 'XXXXXXXXX');
  b = b.replace('CD', 'CCCC');
  b = b.replace('CM', 'CCCCCCCCC');
  let translate = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  console.log(a, b);
  for (let i in b) {
    out += translate[b[i]];
  }
  console.log(out);
}
roman('MCDIV');

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
