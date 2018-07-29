// Spread obretor takes array and spred to single value.

// EX 1.
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log('sum1');
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log('sum2');
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log('sum3');
console.log(sum3);

// EX 2.
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Moh', ...familyMiller];
console.log(bigFamily);

// EX 3.
const h = document.querySelector('h1');

const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
console.log(all)

// for (var box of boxes) {
//     box.style.backgroundColor = 'red';
// }

Array.from(all).forEach(el => el.style.color = 'purple');
// all.forEach(el => el.style.color = 'purple');