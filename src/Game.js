const Question = require("../src/Question");
const Input = require("../src/Input");
const BallCount = require("../src/BallCount");
const { Output, END_MESSAGE } = require("../src/Output");

class Game {
  run() {
    const question = Question.create();

    while (true) {
      const answer = Input.getUserAnswer();

      const ballCount = new BallCount(question, answer);
      const ballCountMessage = ballCount.toString();
      const isThreeStrikes = ballCount.isThreeStrikes();
      Output.printToUser(ballCountMessage);

      if (isThreeStrikes) break;
    }

    Output.printToUser(END_MESSAGE);
  }
}

module.exports = Game;
