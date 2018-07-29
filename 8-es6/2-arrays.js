 //////////////////// Arrays ///////////////////////
 const boxes = document.querySelectorAll('.box');

 //  ES5
 /*
 var boxesArr = Array.prototype.slice.call(boxes);

 //  console.log(boxesArr);

 boxesArr.forEach(function(box) {
     box.style.backgroundColor = 'dodgerblue';
 });
 */

 //  ES6
 const boxesArr = Array.from(boxes);

 //  boxesArr.forEach(box => box.style.backgroundColor = 'red');

 // ES5
 /*
 for (var i = 0; i < boxesArr.length; i++) {
     if (boxesArr[i].className === 'box blue') {
         continue; //breack
     } else {
         boxesArr[i].textContent = 'I changed to red';
     }
 }
 */

 //  ES6: (for of)
 /*
 for (const box of boxesArr) {
     if (box.className.includes('blue')) {
         continue; //breack
     } else {
         box.style.backgroundColor = 'red';
     }
 }
 */

 //  Ex.
 var ages = [12, 17, 8, 21, 14, 11];

 //  ES5
 var full = ages.map(function(age) {
     return age >= 18;
 });

 console.log(full);

 console.log(full.indexOf(true));
 console.log(ages[full.indexOf(true)]);

 //  ES6
 const x = ages.findIndex(age => age > +18);
 console.log(x);

 const y = ages.find(age => age >= 18);
 console.log(y);


 function sum(num) {
     sumObj = 0;
     sum
 }