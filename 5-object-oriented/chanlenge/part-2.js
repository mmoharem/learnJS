(function() {
    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        // this.displayQues();
    }

    Question.prototype.displayQues = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' ' + this.answers[i]);
        }

        // console.log(i + ' ' + this.answers[i]);
    };

    Question.prototype.checkAns = function(answer, callback) {
        var sc;
        if (answer === this.correct) {
            console.log('Your Answer is correct');
            sc = callback(true);

        } else {
            console.log('Wrong answer!');
            sc = callback(false);
        }
        // this.questions[no].displayQues();

    }

    var q1 = new Question('Is javascript the coolest programing language in the world', ['yes', 'no'], 0);

    var q2 = new Question('What is the name of this course\'s teacher?', ['john', 'micheal', 'jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return score;
        }
    }

    //This function use closer
    var keepScore = score();
    console.log('Score is: ' + score);

    function nextQues() {
        var answer;
        var no = Math.floor(Math.random() * questions.length);

        questions[no].displayQues();
        console.log(no);

        var answer = prompt('Please select the correct answer');
        if (answer !== 'exit') {
            // answer = parseInt(answer);
            questions[no].checkAns(parseInt(answer), keepScore);
            nextQues();
        }

    }

    nextQues();


})();