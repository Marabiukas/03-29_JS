/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas;

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }
    return sum / list.length;
}

const rez1 = average([10, 2, 8, 4]);
console.log(rez1);
//------------------------------------------------------

class Bankomatas {
    constructor (street, color) {
        this.street = street;
        this.color = color;
        this.turnedOn = false;
        this.money = 0;
        
    }

    switchOn() {
        this.turnedOn = true;
        return 'ijungtas'
    }

    switchOff() {
        this.turnedOn = false;
    }

    cashIn(money) {
// jei neijungtas - ERROR
// jei nenormalus skaicius - ERROR
// iskaiciuojam pinigus

        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros')
            return;
        }
        if (typeof money !== 'number'
        || !isFinite(money)) {
            console.log('Nepanasu i tikra piniga');
            return; //sustabdo funkcija
        }
        if (money <=0) {
            console.log('Minusiniu pinigu neegzistuoja');
            return;
        }
        this.money += money;
        console.log(`${this.street}`)
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros')
            return;
        }
        if (typeof money !== 'number'
        || !isFinite(money)) {
            console.log('Nepanasu i tikra piniga');
            return; //sustabdo funkcija
        }
        if (money <=0) {
            console.log('Minusiniu pinigu neegzistuoja');
            return;
        }
        if (this.money < money) {
            console.log('Bankomate siuo metu nera tokios suma')
        }
        this.money -= money;
 //       console.log('Bandoma issigryninti pinigus')
    }
}

const bankomatas1 = new Bankomatas ('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas ('Mazoji g. 3', 'blue');

console.log(bankomatas1);
console.log(bankomatas2);

//console.log(bankomatas1.street);
//console.log(bankomatas1.color);
//console.log(bankomatas2.street);
//console.log(bankomatas2.color);

//busenos pakeitimas
/*bankomatas1.switchOn()
bankomatas2.switchOn()
bankomatas1.switchOff()
bankomatas2.switchOff()*/

bankomatas1.switchOn();
bankomatas2.switchOn();
bankomatas1.cashIn(5);
console.log(bankomatas1.money);