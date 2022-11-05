const MissionUtils = require("@woowacourse/mission-utils");
const print = require("./print.js");
const game = require("./game.js");
const validator = require("./validator.js");
const constants = require("./data/constants.js");

class App {
  play() {
    print.start();
    this.answer = game.getAnswer();
    this.submitInput();
  }
  submitInput() {
    let userInput;
    MissionUtils.Console.readLine(constants.MESSAGE.INPUT, (input) => {
      userInput = input.trim().split('').map(number => +number);
      validator.isVaild(userInput);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
