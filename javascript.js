

//console.log(this);






//v1.0
//var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     calculateAge: function(){ // calculateAge is a (method) of john(object).
//          console.log(this);// this is refairing to john(object).
//     }
//};
//
//john.calculateAge(); //caling object method.


////v2.0
//
//var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     calculateAge: function(){ // calculateAge is a (method) of john(object).
//          console.log(this);// this is refairing to john(object).
//          console.log(2016 - this.yearOfBirth);
//     }
//};
//
//john.calculateAge(); //caling object method.

//v3.0
/*
var john = {
     name: 'john',
     yearOfBirth: 1990,
     calculateAge: function(){ // calculateAge is a (method) of john(object).
          console.log(this);// this is refairing to john(object).
          console.log(2016 - this.yearOfBirth);
          
          function innerFunction(){
               console.log(this)
          }
          innerFunction();
     }
};

john.calculateAge(); //caling object method.

*/

//Borowing the method to other object.

var john = {
     name: 'john',
     yearOfBirth: 1990,
     calculateAge: function(){ // calculateAge is a (method) of john(object).
          console.log(this);// this is refairing to john(object).
          console.log(2016 - this.yearOfBirth);
     }
};

john.calculateAge(); //caling object method.

var mike = {
     name: mike,
     yearOfBirth: 1984 
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();