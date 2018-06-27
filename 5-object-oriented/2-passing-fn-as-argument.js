//6- Pasing function as an argument

//First-Class Function
//1. A function is an instance of the Object type;
//2. A function behaves like any other object;
//3. We can store function in a variable
//4. we can pass a function as an argument to another function
//5. We can return a function from a function.

/*
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

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else if (el < 18) {
        return 'under age';
    } else {
        return 'over age';
    }

}

var arrAge = arrayCalc(years, calculateAge); // we pass calculateAge without () as an argument.
var fullAge = arrayCalc(arrAge, isFullAge);
var heartRate = arrayCalc(arrAge, maxHeartRate);

console.log(arrAge);
console.log(fullAge);
console.log(heartRate);
*/