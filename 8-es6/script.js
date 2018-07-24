 //////////////////////////////// let and cont /////////

 /*
 //ES5
 var name5 = 'Jane Smith';
 var age = 23;
 name5 = 'Jone Doe'
 console.log(name5)//Jone Doe

 //ES6
 const name6 = 'Jane Smith'; //use let to be able to change
 let age = 23;
 name6 = 'Jone Doe'
 console.log(name6)//error
 */

 //.. var, are function scope, let and const are blocke scope

 /*
 //ES5
 function driveLicence(passedTest) {
     if(passedTest) {
         var firstName = 'John';
         var yearOfBirth = 1990;
     }
     console.log(`${firstName} born in ${yearOfBirth} is allowed to drive a car`);
 }

 driveLicence(true); //John born in 1990 is allowed to drive a car
 */

 //ES6
 /*
 function driveLicence(passedTest) {
     if(passedTest) {
         let firstName = 'John';
         let yearOfBirth = 1990;
     }
     console.log(`${firstName} born in ${yearOfBirth} is allowed to drive a car`);
 }

 driveLicence(true);// error
 */

 /*
 //to solve this
 function driveLicence(passedTest) {
     let firstName;
     const yearOfBirth = 1990;

     if(passedTest) {
         firstName = 'John'; 
     }
     console.log(`${firstName} born in ${yearOfBirth} is allowed to drive a car`);
 }

 driveLicence(true);// for let you can declare outside the block first, but const cant.

 //Note: if you declar var befor using it is set to undefind
 //      but for let and const it give error not difined
 */

 //Ex
 // ES5
 // var i = 23;

 // for(var i = 0; i < 5; i++) {
 //     console.log(i);
 // }

 // console.log(i); //(0,1,2,3,4,5)

 // ES6
 // case 1
 // let i = 23;

 // for(let i = 0; i < 5; i++) {
 //     console.log(i);
 // }

 // console.log(i); //(0,1,2,3,4,23)

 // case 2
 // let i = 23;

 // for(i = 0; i < 5; i++) {
 //     console.log(i);
 // }

 // console.log(i); //(0,1,2,3,4,5)


 //////////////////////// blocks and iffs ////////////////
 /*
 {
     const a = 1;
     let b = 2;
 }

 console.log(a + b) //error is not defined

 var c;

 (function() {
     c = 4;
 })();

 console.log(c);
 */

 ///////////////////////////  strings in ES6 ///////////////

 /*
 let firstName ='John';
 let lastName = 'Smith';
 const yearOfBirth = 1990;

 const n = `${firstName} ${lastName}`;
 console.log(n);

 console.log(n.startsWith('J')); //true
 console.log(n.endsWith('th')); //true
 console.log(n.includes(' ')); //true

 console.log(`${firstName} `.repeat(5)); //John John John John John 
 */

 ////////////////////////////// Arrow function //////////////////////////

 // ES5
 const years = [1990, 1965, 1982, 1937];

 var ages5 = years.map(function(current) {
     return 2016 - current;
 })

 console.log(ages5);

 // ES6
 let ages6 = years.map(current => 2016 - current);

 console.log(ages6);

 ages6 = years.map((current, index) =>
     `Age current ${index + 1}: ${2016 - current}.`
 );

 console.log(ages6);

 //More than one line
 ages6 = years.map((current, index) => {
     const now = new Date().getFullYear();
     const age = now - current;
     return `Age current ${index + 1}: ${age}.`
 });

 console.log(ages6);