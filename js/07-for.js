const pazymiai = [10, 2, 8, 4, 6];

//neriboto dydzio masyvas

let pazymiuSuma = 0;
const pazymiuKiekis = pazymiai.length

let index = 0;
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);

/*
LOOP: for, while, for-in, for-of, foreach,...
For - visu ciklu tevas
*/

let suma = 0

console.log('START')
for (let i = 0; i < pazymiai.length; i++) {
    //console.log(i)
    //console.log(pazymiai, i);
    const pazymys = pazymiai[i];
    suma += pazymys;
    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}
console.log('END')

console.log('Galutine suma:', suma);

const Vidurkis = suma /pazymiai.length;
console.log('Vidurkis:', Vidurkis);

for (let i=-80; i<-60; i++) {
    console.log(i)
}