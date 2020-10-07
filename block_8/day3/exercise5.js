const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => acc + cur).split('').reduce((acc, cur) => {if (cur === 'a' || cur === 'A') {return acc + 1;}return acc},0);
}
assert.deepEqual(containsA(), 20);
