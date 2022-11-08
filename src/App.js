const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, RESULT } = require("./constants/constants");

class App {
  play() {
    Console.print(MESSAGE.START);
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
}

const app = new App();
app.play();
module.exports = App;
