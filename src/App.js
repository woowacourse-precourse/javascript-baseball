const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/constants");
class App {
  play() {
    Console.print(MESSAGE.START);
    this.gamePrepare();
  }

  gamePrepare() {
    const answer = createRandomNumber();
    this.gameStart(answer);
  }

  gameStart(answer) {
    Console.readLine(MESSAGE.INPUT, (userInput) => {
      if (!validateInputValue(userInput)) {
        this.gameInputError();
      }
      const { ball, strike } = countBallAndStrike(userInput, answer);
      if (strike === MESSAGE.THREE_STRIKE) {
        printResultMessage(ball, strike);
        Console.print(MESSAGE.SUCCESS);
        return this.gameRestartCheck();
      } else {
        printResultMessage(ball, strike);
      }
      return this.gameStart(answer);
    });
  }


}
const app = new App();
app.play();
module.exports = App;
