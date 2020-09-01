function roman(a) {
	let out = 0;
	let b = a.replace('IV', 'IIII');
	b = b.replace('IX', 'VIII');
	b = b.replace('XL', 'XXXX');
	b = b.replace('XC', 'LXXXX');
	b = b.replace('CD', 'CCCC');
	b = b.replace('CM', 'DCCCC');
	console.log(a, b);
	for (let i in b) {
		console.log(b[i]);
		switch (b[i]) {
			case 'I':
				out += 1;
				break;
			case 'V':
				out += 5;
				break;
			case 'X':
				out += 10;
				break;
			case 'L':
				out += 50;
				break;
			case 'C':
				out += 100;
				break;
			case 'D':
				out += 500;
				break;
			case 'M':
				out += 1000;
				break;
			default:
				break;
		}
	}
	console.log(out);
}
roman('CMIV');

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
