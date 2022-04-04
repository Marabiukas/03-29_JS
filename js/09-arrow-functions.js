//Arrow - Functions
console.log('Arrow Functions')

const pirmas = 7;
const antras = 5;

function suma(a, b) {
    return a + b;
}

const r1 = suma(pirmas, antras);
console.log(r1);

const dalyba = (a, b) => {
    return a / b;
}

const r3 = dalyba (pirmas, antras)
console.log(r3);

const tekstas = 'Labas rytas';

function pirmaRaide(text) {
    return text[0];
}

//const pirmaRaide = s => s[0];
//console.log(pirmaRaide(tekstas));

