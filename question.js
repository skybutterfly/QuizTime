/**
 * Created by Mirko on 6.2.2017..
 */
function Question(text, choices, answer) {
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

