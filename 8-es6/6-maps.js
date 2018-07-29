// /*
const question = new Map();

// SET;
question.set('question', 'What is the official name of the latest major JavaScript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES52015');
question.set(4, 'ES7');

question.set('correct', 3);

question.set(true, 'Correct answer :D');
question.set(false, 'Wrong answer, please try again');

// console.log(question); //return [objects]

// GET:
console.log(question.get('question'));

// console.log(question.size);
// console.log(question.get(2));

// DELETE:
// question.delete(4);
// console.log(question);

// HAS:
// if (question.has(3)) {
//     question.delete(3);
// }
// console.log(question);

// CLEAR:
// question.clear();
// console.log(question);

// LOOPING Throw map:
//forEach:
// console.log('----------');
// question.forEach((value, key) => {
//     console.log(`the key is : ${key}, and its value is : ${value}`);

// });

// for of:
// for (let item of question) {
//     console.log(item);
// };
// console.log('----------');

// for (let [key, value] of question.entries()) {
//     console.log(`the key is : ${key}, and its value is : ${value}`);
// }

// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key} is ${value}`);
//     }
// }

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`${key}: ${value}`);
    }
}

function checkAns() {
    var getAns = prompt("Please select the correct answer", "");
    var answer = parseInt(getAns);
    // if ((quest1.get('correct')) === answer) {
    //     console.log('Correct Answer');
    // } else {
    //     console.log('Wrong Answer');
    // }
    console.log(question.get(question.get('correct') === answer));
};

checkAns();

// */


//////////////////////////////////////
/*
(function() {
    var quest1, quest2;

    quest1 = new Map();

    quest1.set('question', 'Is javascript the coolest programing language in the world');
    quest1.set(1, 'yes');
    quest1.set(2, 'no');
    quest1.set('correct', 1);

    function display() {
        console.log(quest1.get('question'));
        console.log(quest1.get(1));
        console.log(quest1.get(2));
    };


    function checkAns() {
        var getAns = prompt("Please select the correct answer", "");
        var answer = parseInt(getAns);
        if ((quest1.get('correct')) === answer) {
            console.log('Correct Answer');
        } else {
            console.log('Wrong Answer');
        }
    };

    function init() {
        display();
        checkAns();
    }

    init();

})();
*/