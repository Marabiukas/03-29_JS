//Arrow - Functions

const pirmas = 7;
const antras = 5;

function suma(a, b) {
    return a + b;
}

console.log(suma(pirmas, antras))

console.log('Alio')

const P = [10, 2, 8, 4, 6]

//FOR
let sumaFor = 0;
for (let i1 = 0; i1 < P.length; i1++) {
    const pazymys = P[i1];
    sumaFor += pazymys;

    console.log(`${i1}) pazymys ${pazymys} [${sumaFor}]`);
}

//WHILE
console.log('While loop');

let sumaWhile = 0;
let i2 = 0;
while (i2 < P.length) {
   const pazymys = P[i2];
   sumaWhile += pazymys;
      console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
i2++;
}

//FOR-OF
// turi buti ne tuscias masyvas
console.log('For-of loop')

let sumaForOf = 0;
let i3 = 0;
for (const pazymys of P) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`)
}

//FOREACH
console.log('Foreach loop')

let sumaForEach = 0;
P.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);
});
