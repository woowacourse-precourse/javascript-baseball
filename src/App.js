const MissionUtils = require("@woowacourse/mission-utils");
const userInputCheck = require("./userInputCheck.js");
const gameCommentPrint = require("./gameCommentPrint.js");
const { GAME_MESSAGE } = require("./constants.js");

class App {
  constructor() {
    this.userInput = "";
    this.computerNumber = [];
  }

  play() {
    gameCommentPrint.printGameStartMessage();
    this.generateRandomNumber();
    this.readUserInput();
  }

  readUserInput() {
    MissionUtils.Console.readLine(GAME_MESSAGE.INPUT, (userInput) => {
      this.userInput = userInput;
      userInputCheck(this.userInput);
      console.log(this.computerNumber)
      this.readUserInput();
    });
  }

  generateRandomNumber() {
    while (this.computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumber.includes(randomNumber)) {
        this.computerNumber.push(randomNumber);
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
