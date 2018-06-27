// Function returning Function

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teatcher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var otherQuestion = interviewQuestion('other');

teacherQuestion('john');
teacherQuestion('mark');

designerQuestion('jane');

otherQuestion('katy');

//Other way
interviewQuestion('teacher')('tony'); //This because its evaluated from left to right.
*/

////////////////////////////////////////////////////////////////////////////////////////////////

//2- Imediatly Invoked Function Expresion (IIFE)

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// using (IIFE)
// rapping function (functin(){}) in paranthis trick the parser and make it belive that it is expression and not a declaration
// This is creating data privacy because you can not access the score from outside the function 
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//you can also pass arguments in IIFE

(function(arg) {
    var score = Math.random() * 10;
    console.log(score >= 5 - arg);
})(5);
*/