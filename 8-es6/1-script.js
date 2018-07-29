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
 //  /*
 function driveLicence(passedTest) {
     if (passedTest) {
         let firstName = 'John';
         let yearOfBirth = 1990;
     }
     console.log(`${firstName} born in ${yearOfBirth} is allowed to drive a car`);
 }

 driveLicence(true); // error
 //  */

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

 ////////////////////////////// Arrow function Basics //////////////////////////

 /*
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
 */

 ///////////////////////// Arrow function lexical 'this' ////////////////

 //ES5
 /*
 var box5 = {

     color: 'green',
     position: 1,
     clickMe: function() {
         var that = this;
         document.querySelector('.green').addEventListener('click', function() {
             var str = `This is box number ${that.position}`;
             alert(str);
             //  console.log(that);

         });
     }
 }

 str = box5.clickMe();
 */

 //ES6
 //  var box6 = {

 //      color: 'green',
 //      position: 1,
 //      clickMe: function() {

 //          document.querySelector('.green').addEventListener('click', () => {
 //              var str = `This is box number ${this.position} color is : ${this.color}`;
 //              alert(str);
 //              //  console.log(this);

 //          });
 //      }
 //  }

 //  str = box6.clickMe();
 /*
  var box66 = {

      color: 'green',
      position: 1,
      clickMe: () => { //the arrow bind this to the outer environment which is (window object)

          document.querySelector('.green').addEventListener('click', () => {
              var str = `This is box number ${this.position} color is : ${this.color}`;
              alert(str);
              //  console.log(this);

          });
      }
  }

  str = box66.clickMe(); //return undifined
  */

 // Ex 2.
 //  function Person(name) {
 //      this.name = name;
 //  };

 // Es5 usin bind
 /*
 Person.prototype.myFriends = function(friends) {
    var arr = friends.map(function(friend) {
        var f = `${this.name} is friends of ${friend}`;
    }.bind(this));
    console.log(arr);
 };

 var friends = ['Bob', 'Jane', 'Mark'];
 new Person('John').myFriends(friends);
 */

 // Es6
 /*
 Person.prototype.myFriends = function(friends) {
     var arr = friends.map((friend) =>
         `${this.name} is friends of ${friend}`
     );
     console.log(arr);
 };

 var friends = ['Bob', 'Jane', 'Mark'];
 new Person('John').myFriends(friends);

 new Person('Moh').myFriends(friends);
 */

 //////////////////// Destruvturing  //////////////////////
 // ES5
 //  var john = ['John', 26];
 //  var name = john[0];
 //  var age = john[1];

 // ES6
 /*
 const john = [name, age] = ['John', 26];
 console.log(name);
 console.log(age);

 const obj = {
     firstName: 'Jane',
     lastName: 'smith'
 };

 const { firstName, lastName } = obj;
 console.log(firstName);
 console.log(lastName);

 const {
     firstName: a,
     lastName: b
 } = obj;
 console.log(a);
 console.log(b);
 */

 //  Ex:
 /*
 function calcAgeRetirement(year) {
     const age = new Date().getFullYear() - year;
     return [age, 65 - age];
 }

 const [age, retAge] = calcAgeRetirement(1990);
 console.log(age);
 console.log(retAge);
 */