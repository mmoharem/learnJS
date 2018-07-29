(function test() {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.display = function() {
        var ansArr = this.answer;

        console.log(this.question);

        ansArr.forEach((ans, i) =>
            console.log(`${i + 1}. ${ans}`)
        );
    };

    Question.prototype.checkAns = function(ans) {
        var answer = parseInt(ans);
        if (this.correct === answer) {
            return true;
        } else if (ans === 'exit') {
            return 'exit';
        } else {
            return false;
        }
        // console.log(`answer is ${typeof(answer)}`);
        // console.log(`correct is ${typeof(this.correct)}`);
    };

    var q1 = new Question('Is javascript the coolest programing language in the world', ['yes', 'no'], 1);
    var q2 = new Question('What is the name of this course\'s teacher?', ['john', 'micheal', 'jonas'], 3);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 3);

    function init() {
        var qArr = [q1, q2, q3];
        var rand = Math.floor(Math.random() * qArr.length);
        var quest = qArr[rand];
        quest.display();
        getScore(quest);
    }

    var score = 0;

    function countScore(n) {

        // score = score + n
        console.log(`score is : ${score}`);
    }

    function getScore(quest) {

        var getAns = prompt("Please select the correct answer", "");
        var checkAns = quest.checkAns(getAns);
        if (checkAns) {

            console.log('correct answer');
            countScore(1);
        } else {
            console.log('wrong answer');
            countScore(0);
        }

        if (checkAns === 'exit') {
            console.log('exit');
        } else {
            // init();
        }
    };

    init();

})();