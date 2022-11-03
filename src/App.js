import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.flag = null;
    this.computer = null;
    this.user = null;
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (this.flag !== 2) {
      this.gameOrder("exit");
    }
  }

  gameOrder() {
    // 1. computer값을 생성한다
    this.makeRandomNumber();
    // 정답이 아닌 경우 값을 받아오는 작업을 반복한다.
    while (this.strike !== 3) {
      // 2. user값을 받아와 검사한다
      this.getUserValue();
      if (this.checkUserValue(this.user)) {
        // 3. computer & user 값을 비교한다
        this.compareWithUser();
      } else {
        this.exitProgram("form");
      }
      // 결과 출력
    }
    // 4. 게임 재시작
    this.askRestart();
  }

  askRestart() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        console.log(`숫자입력: ${answer}`);
        this.flag = answer;
      }
    );
  }

  makeRandomNumber() {
    const computer = [];

    while (computer.length !== 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.computer = [...computer];
  }

  getUserValue() {
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      console.log(`${answer}`);
      this.user = answer.split("");
    });
  }

  checkUserValue(value) {
    const valueSet = new Set(value);

    return valueSet.size === 3 ? true : false;
  }

  compareWithUser() {
    const computerMap = {};

    for (let idx = 0; idx < this.computer.length; idx++) {
      const num = this.computer[idx];
      computerMap[num] = idx;
    }

    for (let idx = 0; idx < this.user.length; idx++) {
      const num = this.user[idx];
      if (computerMap[num] !== undefined) {
        computerMap[num] === idx ? this.strike++ : this.ball++;
      }
    }
  }

  printResult() {
    if (!this.strike && !this.ball) {
      MissionUtils.Console.print("낫싱");
    } else if (!this.ball) {
      MissionUtils.Console.print(`${this.strike} 스트라이크`);
    } else if (!this.strike) {
      MissionUtils.Console.print(`${this.ball} 볼`);
    } else {
      MissionUtils.Console.print(`${this.strike} 스트라이크 ${ball} 볼`);
    }
  }

  exitProgram() {}
}

module.exports = App;
