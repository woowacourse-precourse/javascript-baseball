const MissionUtils = require("@woowacourse/mission-utils");
class App {
  selectNum() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...computer];
  }

  isValidInput(input) {
    return (
      new RegExp(/^[1-9]{3}$/).test(String(input)) &&
      !new RegExp(/([1-9])\1/).test(String(input))
    );
  }

  NumberToArray(number) {
    let numArray = [];
    while (number >= 1) {
      numArray.unshift(number % 10);
      number = parseInt(number / 10);
    }
    return numArray;
  }

  CompareInputWithComputer(input, computer) {
    let inputArray = this.NumberToArray(input);

    let result = new Map();

    result.set("stright", null);
    result.set("ball", null);
    result.set("nothing", null);

    inputArray.forEach((e, idx) => {
      computer.indexOf(e) != -1
        ? computer.indexOf(e) == idx
          ? result.set("stright", result.get("stright") + 1 ?? 1)
          : result.set("ball", result.get("ball") + 1 ?? 1)
        : result.set("nothing", result.get("nothing") + 1 ?? 1);
    });
    return result;
  }

  executeError() {}

  play() {
    MissionUtils.Console.print("숫자게임을 시작합니다.");
    let computerNum = this.selectNum();
    while (true) {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (input) => {
        this.isValidInput(input)
          ? this.CompareInputWithComputer(input.computerNum)
          : this.executeError;
      });
    }
  }
}

module.exports = App;
