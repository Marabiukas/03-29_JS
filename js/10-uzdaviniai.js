//Suma intervale

function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (i = nuo; i <= iki; i++) {
        suma += i;
    }
   return suma 
}
console.log(sumaIntervale(0, 0));
console.log(sumaIntervale(0, 4));
console.log(sumaIntervale(0, 100));
console.log(sumaIntervale(574, 815));
console.log(sumaIntervale(-50, 50));
console.log(sumaIntervale(-70, 30));

//Reversingas

function reverseString(text) {
    const a = text.length - 1;
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const position = a - i;
        const letter = text[position];
        reverse += letter;
    }    
    return reverse;
}

console.log(reverseString('kokteilis'), '-->', 'cba')

function reverseString2(text) {
    let reverse = '';

    for (let i=0; i < text.length; i++) {
        const letter = text[i];
        reverse = letter + reverse;
    }
    return reverse;
}

console.log(reverseString2('kokteilis'), '-->', 'cba');

function reverseString3(text) {
    let reverse = '';

    for (let i=text.length-1; i>=0; i--) {
        reverse += text[i]
    }
    return reverse;
}

console.log(reverseString3('kokteilis'), '-->', 'cba');

// Dalyba be liekanos

function liekana (nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }
 return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));

//console.log(liekana(0, 1_000_000_000, 7)); - labai ilgai skaiciuoja

// Daugybos funkcija

const daugybele = (a, b) => a * b;

console.log('Dvieju skaiciu sandauga', daugybele(7, 5));

function daugyba(a, b) {
    //jei a nera skaicius -> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }
    
    // jei b nera skaicius -> ERROR
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }
    return a * b;
};

console.log(daugyba(7, 5));
console.log(daugyba('', 5));
console.log(daugyba(7, Infinity));


