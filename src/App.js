const MissionUtils = require("@woowacourse/mission-utils");
class App {
  selectNum() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return Number([...computer].join(""));
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
    let computerArray = this.NumberToArray(computer);

    let result = new Map();

    result.set("stright", null);
    result.set("ball", null);
    result.set("nothing", null);

    inputArray.forEach((e, idx) => {
      computerArray.indexOf(e) != -1
        ? computerArray.indexOf(e) == idx
          ? result.set("stright", result.get("stright") + 1 ?? 1)
          : result.set("ball", result.get("ball") + 1 ?? 1)
        : result.set("nothing", result.get("nothing") + 1 ?? 1);
    });
    console.log(input, computer, result);
    return result;
  }

  executeError() {
    throw "유효하지 않는 숫자입니다.";
  }

  play() {
    MissionUtils.Console.print("숫자게임을 시작합니다.");
    let computerNum = this.selectNum();
    while (true) {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (input) => {
        this.isValidInput(input)
          ? printResult(this.CompareInputWithComputer(input, computerNum))
          : this.executeError;
      });
      MissionUtils.Console.clear();
      break;
    }
  }
}

module.exports = App;
