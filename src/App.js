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
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
        (userChoiceInput) => {
          if (userChoiceInput == "1") {
            this.play();
          } else {
            Console.close();
          }
        }
      );
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

      if (strike != "0" && ball != "0") {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (strike == "0" && ball != "0") {
        Console.print(`${ball}볼`);
      } else if (strike != "0" && ball == "0") {
        Console.print(`${strike}스트라이크`);
      } else {
        Console.print(`낫싱`);
      }

      this.enterUserInput(computerValue);
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

    // console.log(computerRandomNum.join(""), "randomNum"); // ❌

    return computerRandomNum.join("");
  }
}
const app = new App();
app.play();

module.exports = App;
