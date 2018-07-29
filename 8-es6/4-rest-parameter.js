// Rest Parameter: recive a couple of single values and transfrom them into array when we call a function with multiple parameters.

// EX 1.

// ES5
// /*
function isFullAge5() {

    // option 1.
    // argsArr = Array.prototype.slice.call(arguments);

    // argsArr.forEach(function(arg) {
    //     console.log((2016 - arg) >= 18);
    // });

    // option 2.
    for (var key in arguments) {
        console.log((2016 - arguments[key]) >= 18);
    }

};


isFullAge5(1990, 1999, 1965);


// ES6
function isFullAge6(...years) {
    years.forEach(year =>
        console.log((2016 - year) >= 18)
    );
}

isFullAge6(1990, 1999, 1965);
// */

// EX 2. addin more arguments
// ES5
// /*
function isFullAge5(limit) {

    // option 1.
    // console.log(limit); //21
    // argsArr = Array.prototype.slice.call(arguments, 1);
    // console.log(argsArr);


    // argsArr.forEach(function(arg) {
    //     console.log((2016 - arg) >= limit);
    // });

    // option 2.
    for (var key in arguments) {
        if (key > 0) {
            console.log((2016 - arguments[key]) >= limit);
        }
    }

};


// isFullAge5(21, 1990, 1999, 1965);


// ES6
function isFullAge6(limit, ...years) {
    years.forEach(year =>
        console.log((2016 - year) >= limit)
    );
}

// isFullAge6(21, 1990, 1999, 1965);
// */