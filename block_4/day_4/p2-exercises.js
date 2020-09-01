function verificaPalindrome(str) {
  let spl = str.split("").reverse().join("");
  if (spl == str) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome("darara"));

function maiorValor(arr) {
  let out = -1;
  let lov = 0;
  for (i in arr) {
    if (lov < arr[i]) {
      lov = arr[i];
      out = i;
    }
  }
  return out;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

function menorValor(arr) {
  let out = -1;
  let lov = 100;
  for (i in arr) {
    if (lov > arr[i]) {
      lov = arr[i];
      out = i;
    }
  }
  return out;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

function mostLetters(names) {
  let cou = 0;
  let out = "";
  for (name in names) {
    if (names[name].length > cou) {
      cou = names[name].length;
      out = names[name];
    }
  }
  return out;
}
console.log(
  mostLetters(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);

function summation(n) {
  let out = 0;
  for (let i = 1; i <= n; i++) {
    out = out + i;
  }
  return out;
}
console.log(summation(5));

function stringer(word, ending) {
  let end = word.slice(-ending.length);
  if (end == ending) {
    return true;
  } else {
    return false;
  }
}
console.log(stringer("trybe", "be"));
