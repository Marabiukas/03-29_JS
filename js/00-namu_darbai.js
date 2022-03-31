/* Namu darbas */

const No1 = 100
console.log(No1)

const No2 = 200
console.log(No2)

const No3 = 300
console.log(No3)

const text1 = 'Labas rytas'
console.log(text1)

const text2 = 'Laba diena'
console.log(text2)

const text3 = 'Labas vakaras'
console.log(text3)

const numeriai = [ 1, 9, 7, 5, 0]
console.log(numeriai)


const numeriai2 = [ 2, 0, 2, 2, 3]
console.log(numeriai2)

const numeriai3 = [ 1, 2, 3, 4, 5]
console.log(numeriai3)

console.log(No1 + No2 + No3)

console.log(text1, text2, text3)

/* namu darbu pabaiga */

/* Namu darbas 0330 */

const n1 = 1;
const n2 = 2;

//Kintamuju palyginimas:
// kuris didesnis:

if (n1 > n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

if (n1 < n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

if (n1 == n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

if (n1 != n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

if (n1 >= n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

if (n1 <= n2) {
    console.log('"Pomidoras"')
} else {
    console.log('"Bandykite dar karta"')
}

const abc = 'siandien sninga'
console.log(abc.length)

//-- 1 uzduotis --
console.log('1 uzduotis')

const n = 20;

if (n >=0 ) {
    console.log(',,Geras"')
} else {
    console.log(',,Blogas"')
}

//-- 2 uzduotis --
console.log('2 uzduotis')

const N1 = 'zalia';
const N2 = 'geltona';
const N3 = 'raudona';

if ( N2 ) {
console.log('Palaukite:', N2)
}

//-- 3 uzduotis --
console.log('3 uzduotis')

const d = 3;
const dn = 5;
const k = 18;

if (d*dn >= k) {
    console.log('Knygos telpa i dezes')
} else {
    console.log('Knygos netelpa i dezes')
}

//-- 4 uzduotis --
console.log('4 uzduotis')

let a = 5;
let b = 7;

if (a > b) {
    console.log(--a, ++b) 
} else {
    console.log(++a, --b) 
}

//-- 5 uzduotis --
console.log('5 uzduotis')

const c = 50;
const p = 20;
let x = Math.floor ( c / p );
let l = c - p * x;

console.log(`Saulius nusipirks ${x} porcijas, liks ${l} centu`);

//-- 6 uzduotis --
console.log('6 uzduotis')

const degtukai = 1

if (degtukai % 3 == 0) {
    console.log('Trikampi sudelioti galima')
} else {
    console.log('Trikampio sudelioti negalima')
}

//-- 7 uzduotis --
console.log('7 uzduotis')

//-- 8 uzduotis --
console.log('8 uzduotis')

const num = 1;

if (num % 2 == 0) {
    console.log('Kambari tvarkys vyresnelis') 
}  else {
    console.log('Kambari tvarkys jaunesnelis')
}

//-- 9 uzduotis --
console.log('9 uzduotis');

let Metai = 2024;

const Olimpiniai = (Metai - 1896) / 4

if ( (Metai - 1896) % 4 == 0) {
    console.log('Olimpiada Nr.:', Olimpiniai + 1)
} else {
    console.log('Metai neolimpiniai')
}

//-- 10 uzduotis --
console.log('10 uzduotis');

let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
let m = 5;

const X = v1 * 60 + m1 + m2;
const Y = v * 60 + m;

const Z = Y - X;

if (Z >= 0) {
    console.log('Petras i pamoka nepaveluos')
} else {
    console.log('Petras i pamoka paveluos')
}

console.log('START')

const skaiciai = [0, 1, 2, 3, 4]
let suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    const skaicius = skaiciai[i];
    suma += skaicius;
}
console.log(`${suma}`);
console.log('END')

console.log('Pirmo simto skaiciu suma')
let summe = 0;
for (let i=0; i<=100; i++) {
    summe += i;
    console.log(summe);
}
console.log(`Suma yra: ${summe}`);

console.log('Dalyba')

let sum3 = 0;
let sum5 = 0;
let sum7 = 0;

for (let i=0; i<=11; i++) {
    dalyba3 = i % 3;
    if (dalyba3 == 0) {
        sum3 += 1;
    }
        dalyba5 = i % 5;
    if (dalyba5 == 0) {
        sum5 +=1;
    }
    dalyba7 = i % 7;
    if (dalyba7 == 0) {
        sum7 += 1
    }
}
console.log(`Skaiciu intervale tarp 0 ir 11, besidalinanciu be liekanos is 3 yra ${sum3} vienetai`);
console.log(`Skaiciu intervale tarp 0 ir 11, besidalinanciu be liekanos is 5 yra ${sum5} vienetai`);
console.log(`Skaiciu intervale tarp 0 ir 11, besidalinanciu be liekanos is 7 yra ${sum7} vienetai`);

