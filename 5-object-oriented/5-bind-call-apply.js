//Bind, Call and Apply

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' +
                this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name +
                ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

//Call Method
john.presentation.call(emily, 'friendly', 'afternoon'); //Method borowing Using (call)

//Apply Method: which only pass array
// john.presentation.apply(emily, ['friendly', 'afternon']); //it will not work beacuse the object is not having array

//Bind Method:
//Its very simller to to call, but bind is not immediatly call a function but instead it generate acopy of the function to store it

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternon');
*/

//////////////////////////////////////////////////////////////

//6- Pasing function as an argument

//First-Class Function
//1. A function is an instance of the Object type;
//2. A function behaves like any other object;
//3. We can store function in a variable
//4. we can pass a function as an argument to another function
//5. We can return a function from a function.


var years = [1990, 1965, 1937, 2005, 1998, 1900];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); // puch() used to insert an element at the end of array
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

// function isFullAge(el) {
//     return el >= 18;
// }

function isFullAge(limit, el) { //new
    return el >= limit;
}

var age = arrayCalc(years, calculateAge);
console.log(age);

// var calc = arrayCalc(age, isFullAge);
// console.log(calc);

var fullJapan = arrayCalc(age, isFullAge.bind(this, 20));
console.log(fullJapan)

// var usaLimit = isFinite.bind()