const MissionUtils = require("@woowacourse/mission-utils");
const userInputCheck = require("./userInputCheck.js");
const gameCommentPrint = require("./gameCommentPrint.js");
const { GAME_MESSAGE } = require("./constants.js");

class App {
  constructor() {
    this.userInput = "";
  }

  play() {
    gameCommentPrint.printGameStartMessage();
    this.readUserInput();
  }

  readUserInput() {
    MissionUtils.Console.readLine(GAME_MESSAGE.INPUT, (userInput) => {
      this.userInput = userInput;
      userInputCheck(this.userInput);
      this.readUserInput();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
