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

    Question.prototype.checkAns = function(ans, n) {
        if (answer === this.correct) {
            console.log('Your Answer is correct');
            console.log(no);
        } else {
            console.log('Wrong answer!');
        }
        // this.questions[no].displayQues();

    }

    var q1 = new Question('Is javascript the coolest programing language in the world', ['yes', 'no'], 0);

    var q2 = new Question('What is the name of this course\'s teacher?', ['john', 'micheal', 'jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

    var questions = [q1, q2, q3];

    var no = Math.floor(Math.random() * questions.length);

    questions[no].displayQues();
    console.log(no);

    var answer = parseInt(prompt('Please select the correct answer'));
    questions[no].checkAns(answer);
})();