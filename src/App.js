const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const IsValid = require("./IsValid");
const Compare = require("./Compare");
class App {
  constructor() {
    this.CORRECT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    this.computer = new Computer().computerNumber();
    this.isValid = new IsValid();
    this.compare = new Compare();
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.start();
  }
  start() {
    const computer = this.computer;
    let user = [];
    let result = "";
    MissionUtils.Console.readLine("숫자를 입력해주세요: ", (answer) => {
      if (this.isValid.isValid(answer) === true) {
        answer.split("").forEach((x) => user.push(+x));
        result = this.compare.compare(computer, user);
        MissionUtils.Console.print(result);
      }
    });
  }
}
module.exports = App;
