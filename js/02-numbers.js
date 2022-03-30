/*
NUMBERS:
- normalus:
    - sveikieji
    - desimtainiai
- nenormalus:
    - NaN (not-a-number)
    - Infinity; -Infinity

OPERATORIAI:
++ - padidinimas vienu vienetu
-- - sumazinimas vienu vienetu
+=, -=, *=, %= - savo paties reiksmes pakeitimas (a = a + 5 -> a += 5)
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 7;
const antras = 5;

const dalmuo = pirmas / antras;
console.log(dalmuo);

console.log('----------------')
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('----------------')
console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');

console.log('num, string')
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');

console.log('num; true')
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('num; false')
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('---------------');
console.log(2**4);
console.log(3.14**3.14);
console.log(7 % 2);
console.log(13 % 5);
console.log(13 % 14);

console.log('---------------');
let pinigineAfter = 0;
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);
console.log('Pinigine:', pinigineAfter++);

console.log('---------------');
let pinigineBefore = 0;
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);
console.log('Pinigine:', ++pinigineBefore);

console.log('---------------');
let skolaAfter = 0;
console.log('Skola:', pinigineAfter--);
console.log('Skola:', pinigineAfter--);
console.log('Skola:', pinigineAfter--);

console.log('---------------');
let skolaBefore = 0;
console.log('Skola:', --skolaBefore);
console.log('Skola:', --skolaBefore);
console.log('Skola:', --skolaBefore);

let a = 0;
console.log(a);
a++;
console.log(a);
++a;
console.log(a);
a = a + 1
console.log(a);

console.log('------------------')
let b = 0;
console.log(b);
b = b + 3;
console.log(b);
b++;
b++;
b++;
console.log(b);

