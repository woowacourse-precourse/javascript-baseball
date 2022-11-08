const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/constants");

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
}

const app = new App();
app.play();
module.exports = App;
