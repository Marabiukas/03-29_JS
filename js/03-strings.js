/*
STRING

kabutes: 
    - viengubos (')
    - dvigubos (")
    - backtick'as (`)

    Teksto simboliu kiekis: .length()
*/

const name = 'Petras'
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const viengubaKabute = "viengubos (') ";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos (") ';
console.log(dvigubaKabute);

const viengubaKabute12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.'
console.log(viengubaKabute12);

const clientName = 'Maryte';
const clientAge = 87;
// Client Maryte is 87 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old`
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const rez = n1 + n2
//7 + 5 = 12
const ats = `${n1} + ${n2} = ${rez}`;
console.log(ats);

const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abecele "${abc}" dydis yra ${abcDydis} simboliu.`)
