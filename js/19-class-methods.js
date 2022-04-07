/*
NUMBER
*/
// skaiciaus konvertavimas i string
console.log((5215).toString());
console.log('' + 5215);

//desimtaines dalies "nukirpimas"
console.log((3.1415).toFixed(2));
console.log(typeof (3.1415).toFixed(3));

//is teksto konvertavimas i skaiciu
console.log(parseFloat('17.53'));
console.log (typeof parseFloat('17.53'));
console.log(parseInt('17.53'));
console.log (typeof parseInt('17.53'));
console.log(+'17.53');  //casting ???
console.log(parseFloat('labas')); //NaN

//"Math class"
console.log('Math class')
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-7));
console.log(Math.round(1.5));
console.log(Math.floor(1.5)); //tempia i apacia
console.log(Math.ceil(1.5));  //tempia i virsu
console.log('random skaicius: nuo nulio iki <1, t.y. [0..1)')
console.log(Math.random());
console.log('min-max');
console.log(Math.min(1, 5, 7, -4, 3)); //neveiks su masyvais []
console.log(Math.max(1, 5, 7, -4, 3));

/*
STRING
*/
console.log('STRING')

console.log('Labas rytas, Lietuva!'.length)
//ar stringe yra kitas sub-stringas
console.log('Labas rytas, Lietuva!'.includes('rytas')); //true
console.log('Labas tytas, Lietuva!'.includes('x')); //false
// kur stringe yra kitas sub-stringas
console.log('Labas rytas, Lietuva!'.indexOf('L')); //ras tik pirma L
console.log('Labas rytas, Lietuva!'.indexOf('x')); // jei nera, duos pozicija -1
// "sukarpyti" stringa i dalis
console.log('Labas rytas, Lietuva!'.split(' ')); //duoda masyva
console.log('Labas rytas, Lietuva!'.split('a'));
//kartojimas
console.log('Steve'.repeat(3));
console.log('Labas rytas, Lietuva!'.slice(6, 11));
// teksto konvertavimas
console.log('Labas rytas, Lietuva!'.toLowerCase());
console.log('Labas rytas, Lietuva!'.toUpperCase());
// nutrinti tarpus
console.log('    Labas   rytas!    '.trimStart() + '.');
console.log('    Labas   rytas!    '.trimEnd() + '.');
console.log('    Labas   rytas!    '.trim() + '.'); //galima panaudoti Username' o inpute nutrinti tuscius prieki ir gala
//replace
console.log('Labas rytas, Lietuva!'.replace('rytas', 'vakaras'));
console.log('Labas rytas, Lietuva!'.replaceAll('a', '_'));

/*
BOOLEAN
*/
console.log(true.toString());

/*ARRAY
*/

const rytas = ['Labas', 'rytas', 'Lietuva'];

console.log(rytas.length);
//sujungti
console.log(rytas.join(', ')); //pavers i stringa
console.log(rytas.includes('a')); //a kaip masyvo elemento nera
console.log(rytas.includes('rytas'));
console.log(rytas.indexOf('a')); //tokio ner, tai duos -1

//kitokie
console.log(rytas.push('PUSH')); //itraukia is galo
console.log(rytas.unshift('UNSHIFT')); //itraukia is priekio
console.log(rytas.pop()); //nuima is galo
console.log(rytas.shift()); //nuima is priekio

//extra
console.log(rytas.reverse());

//map, filter, sort, reduce, every, flat, forEach
const marks = [10, 2, 8, 4, 6];
console.log('map - individualiu reiksmiu konvertavimas');
console.log(marks.map(item => item));
console.log(marks.map(item => item));
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.5));

console.log('filter');
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item > 5 && item % 3 ===0));

console.log('reduce - sutraukia visas reiksmes i viena reiksme');
console.log(marks.reduce((total, item) => total + item, 0)); //item=0 yra startine reiksme
console.log(marks.reduce((total, item) => total + item));
console.log(marks.reduce((total, item) => total * item, 1));
console.log(marks.reduce((total, item) => total * item));
console.log(marks.reduce((total, item) => total - item, 0));
//0 - 10 - 2 - 8 - 4 -6
console.log(marks.reduce((total, item) => total - item));
//10 - 2 - 8 - 4 - 6
console.log(marks.reduce((total, item) => total / item));

console.log('sort');
const nums = [1, 2, 3, 10, 20, 30, 11, 21, 31]
console.log(marks.sort()); //tarsi lygintu tekstus
console.log(nums.sort());
console.log(nums.sort((a, b) => a - b)); //didejimo tvarka
console.log(nums.sort((a, b) => b - a)); //mazejimo tvarka

const texts = ['asd', 'qw', 'asdas', 's'];
console.log(texts.sort((a, b) => a.length - b.length)); //didejimo tvarka
console.log(texts.sort((a, b) => b.length - a.length)); //mazejimo tvarka

//console.log('flat');
//const matrix = [1, 2, [7, 8]],
//console.log(matrix.flat());

console.log(' ... - spread operator');
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));
const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(...minMax));
console.log(Math.max(...minMax));

console.log('kaip sujungti kelis masyvus i viena - su sread ... operatorium')
const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
const m123 = [...m1, ...m2, ...m3];
console.log(m123);
/*
OBJECT
*/

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

console.log('automatinis visu objekto raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('automatinis visu objekto reiksmiu istraukimas');
for (const key of personKeys) { //for of ciklas eina tik per masyvus
    console.log(key, ':', person[key]);
}

console.log('FOR-IN') //vienintelis ciklas, kuris veikia su objektu
for (const key in person) {
    console.log(key, ':', person[key]);


}

console.log('... - spread operator naudojimas objekte') //spreadas nuima isorinius skliaustelius - masyvui lauztinius, objktui riestinius
console.log({...person});
//galima keisti reiksme, bet turi buti kaip css'e paskutinis teiginys
console.log({...person, isMarried: false});

const objA = {
    a: 'a',
    c: 'c',
    b: 'bbb'
}

const objB = {
    b: 'b',
    d: 'd'
}

const objAB = {...objA, ...objB};
const objBA = {...objB, ...objA};
console.log(objAB);
console.log(objBA);

//destruktuzavimas
const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red'
}

const carName = car.name;
const carModel = car.model;
const carColor = car.color;

console.log(carName, carModel, carColor);

const { name, color, model} = car;
console.log(name, color, model);

//random 

const random = Math.floor(Math.random() * 10); // [0..9]
console.log(random);

function randomNumber(nuo = 0, iki = 9) {
    return nuo + Math.floor(Math.random() * (iki - nuo + 1));
}
