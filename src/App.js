const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    this.makeRandomNum();
    this.enterUserInput();
  }

  enterUserInput() {
    Console.readLine("숫자를 입력해주세요 : ", (userInputValue) => {
      // 여기서 입력된 값을 비교하는 함수를 따로 만든다.
      this.getStrikeAndBall(userInputValue);
    });
  }

  getStrikeAndBall(userValue) {
    const computerValue = this.makeRandomNum();
  }

  makeRandomNum() {
    const computerRandomNum = [];
    while (computerRandomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNum.includes(number)) {
        computerRandomNum.push(number);
      }
    }

    console.log(computerRandomNum.join("")); // ❌

    return computerRandomNum.join("");
  }
}
const app = new App();
app.play();

module.exports = App;
