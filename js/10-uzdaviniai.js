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









//Kelintiniai metai
console.log('Kelintiniai metai')

function Metai (metai) {
    if (metai % 400 == 0) {
        return 'Metai yra kelintiniai';
    } else if (metai % 4 != 0 || metai % 400 !=0) {
        return 'Metai yra nekelintiniai';
    } else {
        return 'Metai yra kelintiniai';
    }
}

console.log(Metai(1900))