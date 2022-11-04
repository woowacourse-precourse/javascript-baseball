const MissionUtils = require("@woowacourse/mission-utils");
class App {
  selectNum() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return String([...computer].join(""));
  }

  isValidInput(input) {
    return (
      new RegExp(/^[1-9]{3}$/).test(String(input)) &&
      !new RegExp(/([1-9])\1/).test(String(input))
    );
  }

  play() {
    MissionUtils.Console.print("숫자게임을 시작합니다.");
    let computerNum = this.selectNum();
    while (true) {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (number) => {
        isValidInput(number);
      });
      break;
    }
  }
}

module.exports = App;
