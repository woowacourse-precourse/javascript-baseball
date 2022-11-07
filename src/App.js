const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    const computerValue = this.makeRandomNum();
    this.enterUserInput(computerValue);
  }

  enterUserInput(computerValue) {
    Console.readLine("숫자를 입력해주세요 : ", (userInputValue) => {
      // 여기서 입력된 값을 비교하는 함수를 따로 만든다.
      this.getStrikeAndBall(computerValue, userInputValue);
    });
  }

  getStrikeAndBall(computerValue, userValue) {
    if (userValue == computerValue) {
      // 만약에 같은 수가 나오게 된다면 console.log 띄우고 재시작 여부 물어봄
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    } else {
      let strike = 0;
      let ball = 0;

      Array.from(userValue).forEach((value, index) => {
        if (value === computerValue[index]) {
          strike++;
        } else if (computerValue.includes(value)) {
          ball++;
        }
      });

      Console.print(strike, "스트라이크 수");
      Console.print(ball, "볼 수");
    }
  }

  makeRandomNum() {
    const computerRandomNum = [];
    while (computerRandomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNum.includes(number)) {
        computerRandomNum.push(number);
      }
    }

    console.log(computerRandomNum.join(""), "randomNum"); // ❌

    return computerRandomNum.join("");
  }
}
const app = new App();
app.play();

module.exports = App;
