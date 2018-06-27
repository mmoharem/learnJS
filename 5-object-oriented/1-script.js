// Function Constructor

// var jhon = {
//     name: 'john',
//     yearOfBith: 1990,
//     job: 'teacher' //variables
// };

//1- Function Constructor
// var Person = function(name, yearOfBith, job) { // variables called parameters in func constructor
//     this.name = name;
//     this.yearOfBith = yearOfBith;
//     this.job = job;
// }

//Object of Function Constructor or instanciation
// var john = new Person('john', 1990, 'teacher');
// console.log(this.john);

//In normal JS this. point to global object in (OOP) the (new) operater make this. point to the new object
/////////////////////////////////////////////////////////////////////

//2- Inhertance
// var Person = function(name, yearOfBith, job) { // variables called parameters in func constructor
//     this.name = name;
//     this.yearOfBith = yearOfBith;
//     this.job = job;
//     this.calculateAge = function() {
//         console.log(2016 - this.yearOfBith) //adding method
//     }
// }

// var john = new Person('john', 1990, 'teacher');

// john.calculateAge();

// var jane = new Person('jane', 1969, 'designer');
// jane.calculateAge();

// var mark = new Person('mark', 1948, 'rettired');
// mark.calculateAge();

/////////////////////////////////////////////////////////////////////////////////////////////////////

//3- inhertance with prototype

// var Person = function(name, yearOfBith, job) { // variables called parameters in func constructor
//     this.name = name;
//     this.yearOfBith = yearOfBith;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBith)
// }

//Attaching proties with prototype //For exampe only: which is not a good practice
//Person.prototype.lastName = 'Smith';
////////////

// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('jane', 1969, 'designer');
// var mark = new Person('mark', 1948, 'rettired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
///////////////////////////////////////////////////////////////
//The console is very powerfull for inspecting objects and prototyping chain
//1. type john in the and will get the john object which have all the prototyping options either the object object constructor
//
//2. to check type (john._ === Person.prototype) you will get (true)
//
//3. you can use any of the object object method on john object as follows
//  john.hasOwnProperty('job'), it will return (true). because its john own property
//  john.hasOwnProperty('lastName'), it will return (false) because it's not jhohn own property
//
//4. using instanceof method
//  john instanceof Person, it will return (true) 
//////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////

//4- Obect .create method
//  First we will define an object that will act as prototype and the create object base on that prototype
// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'john';
// john.yearOfBirth = '1990';
// john.job = 'teacher';

// //Anothre way

// var jane = Object.create(personProto, {
//     name: { value: 'jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////

//5- Primitives vs Object
//variable associated with premitives are holding the data inside the variable itself
//variable associated with objects donot contain the object instead it they are contain a refrence where an object sits(just point to the object)
/*
//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //return 46
console.log(b); //return 23

//Objects
var obj1 = {
    nam: 'john',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age); //return 30
console.log(obj2.age); //return 30
*/

/*
//Functions
var age = 27;
var obj = {
    name: 'jonas',
    city: 'Lisbon'
};

// console.log(obj.name);

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

//////////////////////////////////////////////////////////////////////////////