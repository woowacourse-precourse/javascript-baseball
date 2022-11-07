const { Console, Random } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class App {
  getUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const validation = new Validation(userInput);
      if (validation.isValidInput()) {
        return userInput;
      }
    });
  }

  doGame(computerRandomNumber) {
    const userNumber = this.getUserInput();
    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < 3; i++) {
      if (computerRandomNumber[idx] === userNumber[idx]) strikeCount++;
      else if (userNumber.includes(computerRandomNumber[idx])) {
        ballCount += 1;
      }
    }
    return { strikeCount, ballCount };
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3).join(
      ""
    );
    this.doGame(computerRandomNumber);
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
