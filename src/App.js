const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT, RESTART_INPUT } = require("./constants/constants");
const { getRandomNumber } = require("./utils/getRandomNumber");
const { checkRestartInput } = require("./utils/checkInput");

class App {
  play() {
    Console.print(MESSAGE.START);
    this.gameStart();
  }

  gameStart() {
    const computerNumber = getRandomNumber(3);
    this.getUserNumber(computerNumber);
  }

  getStrikeAndBallNumber(computerNumber, userInput) {
    const count = {
      strike: 0,
      ball: 0,
    };

    computerNumber.forEach((computer, index) => {
      if (`${computer}` === userInput[index]) {
        count.strike += 1;
      } else if (userInput.includes(computer)) {
        count.ball += 1;
      }
    });
    return count;
  }

  getResultMessage(strike, ball) {
    if (strike === 0 && ball === 0) return RESULT.NOTHING;
    if (strike === 0) return `${ball}${RESULT.BALL}`;
    if (ball === 0) return `${strike}${RESULT.STRIKE}`;
    return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
  }

  isRestartGame() {
    Console.print(`3${RESULT.STRIKE}\n${MESSAGE.SUCCESS}`);
    Console.readLine(`${MESSAGE.RESTART}\n`, (input) => {
      checkRestartInput(input);
      if (input === RESTART_INPUT.YES) {
        this.gameStart();
      } else if (input === RESTART_INPUT.NO) {
        Console.close();
      }
    });
  }
}

const app = new App();
app.play();
module.exports = App;
