// alert('Please select the correct answer(just type hte number)')
// document.querySelector('#btnClick').addEventListener('click', function() {
//     var x = document.getElementById('myAns').value;
//     document.getElementById("demo").innerHTML = x;
// });

var Question = function() {
    this.questions = [
        'Is js the coolest programming lang in the world!',
        'Is this !question two',
        'Is this question Three',
        'Is this !question Four'
    ];
    this.answers = [
        'yes',
        'no',
        'yes',
        'no'
    ];
    // }();
    // console.log(question);
};

Question.prototype.selectQ = function() {
    // var count = this.questions.length;
    var rand;
    var self = this;

    (function getRandomInt() {
        var count = self.questions.length;
        return rand = Math.floor(Math.random() * Math.floor(count));
    })();

    console.log(rand);
    console.log(this.questions[rand]);
    console.log(this.answers[rand]);


};

function checkAnswer() {
    if (ans === 'yes') {
        console.log(ans);
        return true;
    } else if (ans === 'no') {
        console.log(ans);
        return false
    }
};

Question.prototype.selectAns = function() {

};

var ask = new Question();
ask.selectQ();






/////////////////////////////////////////////////////////////////////////

// var questions = [
//     'Is js the coolest programming lang in the world!',
//     'Is this !question two',
//     'Is this question Three',
//     'Is this !question Four'
// ]

// var answers = [
//     'yes',
//     'no',
//     'yes',
//     'no'
// ]

// var questionArr = [{
//         q1: 'Is js the coolest programming lang in the world!',
//         ans1: 'yes'
//     },
//     {
//         q2: 'Is this !question two',
//         ans2: 'no'
//     },
//     {
//         q3: 'Is this question Three',
//         ans3: 'yes'
//     },
//     {
//         q4: 'Is this !question Four',
//         ans4: 'no'
//     }
// ];


// function master(question) {
//     var arr1 = [];


//     for (j in question[i]) {
//         console.log(j);
//     }
//     arr1.push(shifted);





//     // console.log('3: ');
//     // console.log(arr1);
// };


// function itrate(qArr) {
//     for (var i = 0; i < qArr.length; i++) {
//         // console.log('----keys----');
//         var keys = Object.keys(qArr[i]);
//         shifted = keys.shift();
//         console.log(shifted);

//     }

// }

// itrate(questionArr);
// // console.log(shifted);
// // master(questionArr);