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
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);