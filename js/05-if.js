/*
IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else if {}

Palyginimo operatoriai:
- visi: >, <, <=, >=, ==, != (nelygu), === (lygina ne tik reiskmes, bet ir tipus, pvz. a = 7 ir b = '7'), !==
- naudotini: 
- NEnaudotini: ==, != (del saugumo)

*/

const a = 7;
const b = 55;

if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B')
}
// Namu darbas
const x = 5;
const y = 6;
const z =7 ;

if (x > y) {
    console.log('Pomidoras')
}
//-------------

//Daug if'u

/*
const day = 3;
if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3);
console.log('treciadienis');
}
*/
console.log('-------------');
const akiuSpalva = 'melyna';

if (akiuSpalva === 'zalia') {
    console.log('zaliaakiai yra zalciai!');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes.')
    }
}

console.log('----------------');

const temperatura = 25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = true;

if(arYraKrituliu === true) {
    // siuo metu lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Varyk su maike');
    } else {
        console.log('Tau reikes kailiniu');
    }
} else {
    //siuo metu lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Gali eiti nuogas');
    } else
}