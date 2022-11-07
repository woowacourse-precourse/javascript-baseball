const { Console, Random } = require("@woowacourse/mission-utils");
const Validation = require("./Validation");

class App {
  userInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      const validation = new Validation(userInput);
      if (validation.isValidInput()) {
        return userInput;
      }
    });
  }

  start() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3).join(
      ""
    );
  }

  play() {
    this.start();
  }
}

const app = new App();
app.play();

module.exports = App;
