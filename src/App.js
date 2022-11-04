const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isContinued = true;
    this.computer = [];
    this.user = [];
    this.score = {
      ball: 0,
      strike: 0,
    };
  }

  checkDistinct(input) {
    const arr = typeof input === "string" ? input.split("") : input;
    const set = new Set(arr);

    return arr.length === set.size;
  }

  inputUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputString = input + "";

      if (/^[1-9]{3}$/.test(inputString)) {
        throw "1에서 9까지의 숫자 3자리만 입력할 수 있습니다";
      }
      if (!checkDistinct(input)) {
        throw "각 자릿수는 서로 달라야 합니다";
      }
      this.user = inputString.split("");
    });
    MissionUtils.Console.close();
  }

  setComputerNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }
  }

  shouldContinue() {
    let flag;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        if (/[12]{1}/.test(input)) {
          throw "1 또는 2만 입력 가능합니다";
        }
        flag = input === 1;
      }
    );

    return flag;
  }

  main() {
    this.inputUserNumber();
    this.setComputerNumber();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    do {
      this.main();
    } while (this.shouldContinue());
  }
}

const app = new App();
app.play();

module.exports = App;
