//Closures
//The function variable is still available (stored in the scope chain) after the function return excuted
function retirement(retirmentAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirmentAge - age) + a)
    }
}

//sase-1
var retirmentUs = retirement(66);
retirmentUs(1978);

//case-2
retirement(66)(1990);

//case-3
(function retirement(retirmentAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirmentAge - age) + a)
    }
})(66)(1990);

// How the Closuer works:
//   the inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
// after the outer function excuted or returned they variabels and parameters ar stored in the scope chain.
// Scope Chain: its like a pointer to all variable objects that function has access to.

///////////////
//Reconstract the interview function with power of encloser.

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teatcher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// }

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teatcher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

interviewQuestion('teacher')('jane');