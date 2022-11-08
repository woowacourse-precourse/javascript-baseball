const Question = require("../src/Question");
const Input = require("../src/Input");
const { Output, WELCOME_MESSAGE } = require("../src/Output");

class App {
  play() {
    Output.printToUser(WELCOME_MESSAGE);

    Input.getUserAnswer(Question.create());
  }
}

module.exports = App;
