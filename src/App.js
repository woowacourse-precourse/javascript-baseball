const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.selectComputerNumber = [];
    this.inputNumber = [];
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
