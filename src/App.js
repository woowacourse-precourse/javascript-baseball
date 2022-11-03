const MissionUtils = require("@woowacourse/mission-utils");
let computer = [];

class App {
  play() {
    this.computerNumber();
    this.start();
  }

  computerNumber() {
    computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  start() {
    let ball = 0;
    let strike = 0;

    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      for (let i = 0; i < computer.length; i++) {
        if (i == computer.indexOf(parseInt(answer[i]))) strike++;
        else if (computer.includes(parseInt(answer[i]))) ball++;
      }

      if (ball > 0 && strike > 0) {
        MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (ball > 0 && strike == 0) {
        MissionUtils.Console.print(`${ball}볼`);
      } else if (ball == 0 && strike > 0 && strike != 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
      } else if (ball == 0 && strike == 0) {
        MissionUtils.Console.print("낫싱");
      } else if (strike == 3) {
        MissionUtils.Console.print("3스트라이크");
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        MissionUtils.Console.print(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
      }
      this.start();
    });
  }
}
module.exports = App;
