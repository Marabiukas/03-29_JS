/*
OBJECT
*/

console.log('Object')

/*
Mokiniai (array):
-mokinys (???) 
    - vardas (string), 
    - pazymiai (array), 
    - kontaktinis asmuo (???)
        -vardas (string),
        -telefono nr (number)
*/

/*const students = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const marks = [[10, 8], [10, 7], [10, 6] [10, 5]];
const contactName = ['P.P', 'M.M', 'J.J', 'O.O'];
const contactPhone = [111, 222, 333, 444];

const studentIndex = 2;
console.log('Vardas:', students[studentIndex]);
console.log('Pazymiai:', marks[studentIndex]);
console.log('Kontaktinio asmens vardas:', contactName[studentIndex]);
console.log('Kontaktinio asmens telefonas', contactPhone[studentIndex]);
*/

/*const students = [
    ['Petras', [10, 6], ['P.P', 111]],
    ['Maryte', [10, 7], ['M.M', 222]],
];

const index = 2;
const student = students[index];
const studentName = student[0];
const StudentMarks = student[1];
const studentContactPerson = student[2];*/

//blogas isdestymas jei dingsta vienas irasas

//const studentai = [
 //   {
 //       key: value,
 //   }
//]

const students = [
    {
        name: 'Petras',
        marks: [10, 6],
        contact: {
            name: 'P.P.',
            phone: 111,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
    {
        name: 'Maryte',
        marks: [10, 7],
        contact: {
            name: 'M.M.',
            phone: 222,
            address: {
                city: 'Vilnius',
                street: 'Street'
            },
        },
    },
];

const studentIndex = 1;
const student = students[studentIndex];
const name = student.name;
const marks = student.marks;
const contactName = student.contact.name;
const contactPhone = student.contact.phone;
const contactCity = student.contact.address.city;

//console.log(student);
console.log(name);
console.log(marks);
console.log(contactName);
console.log(contactPhone);
console.log(contactCity);