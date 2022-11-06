const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.selectComputerNumber = [];
    this.inputNumber = [];
  }

  getHint() {
    let strike = 0;
    let ball = 0;
    for (let number of this.selectComputerNumber) {
      // 스트라이크
      if (
        this.inputNumber.includes(number) &&
        this.selectComputerNumber.indexOf(number) ===
          this.inputNumber.indexOf(number)
      ) {
        strike += 1;
      }
      // 볼
      else if (
        this.inputNumber.includes(number) &&
        this.selectComputerNumber.indexOf(number) !==
          this.inputNumber.indexOf(number)
      ) {
        ball += 1;
      }
    }
    this.printHint(strike, ball);
  }

  printHint(strike, ball) {
    if (ball === 0 && strike !== 0) {
      if (strike !== 3) {
        MissionUtils.Console.print(`${strike}스트라이크`);
        this.inputNumber = [];
        this.inputNum();
      } else {
        MissionUtils.Console.print(`${strike}스트라이크`);
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    } else if (strike === 0 && ball !== 0) {
      MissionUtils.Console.print(`${ball}볼`);
      this.inputNumber = [];
      this.inputNum();
    } else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱");
      this.inputNumber = [];
      this.inputNum();
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      this.inputNumber = [];
      this.inputNum();
    }
  }

  inputNum() {
    // 사용자의 숫자 입력
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
      if (number.length !== 3) {
        throw "3자리수를 입력하세요.";
      }
      for (let i = 0; i < number.length; i++) {
        if (!this.inputNumber.includes(Number(number[i]))) {
          this.inputNumber.push(Number(number[i]));
        } else {
          throw "서로 다른 3자리수를 입력하세요.";
        }
      }

      // 힌트 출력
      this.getHint();
    });
  }

  selectRandomNum() {
    // 컴퓨터의 1~9까지 서로다른 3자리의 숫자 선택
    while (this.selectComputerNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.selectComputerNumber.includes(number)) {
        this.selectComputerNumber.push(number);
      }
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    this.selectRandomNum();
    // console.log(this.selectComputerNumber);
    this.inputNum();
  }
}

// module.exports = App;

const app = new App();
app.play();
