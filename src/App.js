const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.isContinued = true;
    this.computer = [];
    this.user = [];
  }

  checkDistinct(input) {
    const arr = typeof input === "string" ? input.split("") : input;
    const set = new Set(arr);

    return arr.length === set.size;
  }

  inputUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputString = input + "";
      if (inputString.length !== 3) {
        throw "3자리 숫자를 입력해야 합니다";
      }
      if (!checkDistinct(input)) {
        throw "각 자릿수는 서로 달라야 합니다";
      }
      this.user = inputString.split("");
    });
    MissionUtils.Console.close();
  }

  main() {
    this.inputUserNumber();
  }

  play() {
    this.main();
  }
}

module.exports = App;
