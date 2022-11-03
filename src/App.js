const MissionUtils = require("@woowacourse/mission-utils");
const VALIDATION_CODE = ["SUCCESS", "RESTART", "EXIT"];

class App {
  constructor() {
    this.exit = false;
    this.code = null;
    this.user = "";
    this.computer = "";
  }
  play() {
    for (let i = 0; i < 7; i++) {
      this.start();
      this.input();
    }
  }

  start() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  input() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      this.code = this.checkValidation(answer);
      this.user = answer.split("").map((num) => parseInt(num));
      console.log("user", this.user, this.code);
    });
  }

  checkValidation(answer) {
    if (answer.split("").length > 3) throw "error";
    else if (answer == "1") return VALIDATION_CODE[1];
    else if (answer == "2") return VALIDATION_CODE[2];
    else return VALIDATION_CODE[0];
  }
}

module.exports = App;
