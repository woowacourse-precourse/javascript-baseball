const MissionUtils = require("@woowacourse/mission-utils");
class App {
  computerNum = 0;

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

    result.set("스트라이크", null);
    result.set("볼", null);

    inputArray.forEach((e, idx) => {
      computerArray.indexOf(e) != -1
        ? computerArray.indexOf(e) == idx
          ? result.set("스트라이크", result.get("스트라이크") + 1 ?? 1)
          : result.set("볼", result.get("볼") + 1 ?? 1)
        : "";
    });
    return result;
  }

  printResult(result) {
    let statement = "";
    if (!result.get("볼") && !result.get("스트라이크")) {
      statement = "낫싱";
    } else if (result.get("스트라이크") == 3) {
      statement = "3스트라이크";
    } else {
      let ball = result.get("볼") != null ? result.get("볼") + "볼" : "";
      let strike =
        result.get("스트라이크") != null
          ? result.get("스트라이크") + "스트라이크"
          : "";
      statement = ball ? ball.concat(strike ? " " + strike : "") : strike;
    }
    return statement;
  }

  executeError() {
    throw "유효하지 않는 숫자입니다.";
  }

  play() {
    this.computerNum = this.selectNum();
    let inputNum = 0;
    let flag = 1;
    let compareResult = "";
    while (flag) {
      MissionUtils.Console.readLine("숫자를 입력해주세요.", (input) => {
        inputNum = input;
        this.isValidInput(input) ? "" : this.executeError();
      });
      compareResult = this.CompareInputWithComputer(inputNum, this.computerNum);
      MissionUtils.Console.print(this.printResult(compareResult));
    }
    MissionUtils.Console.close();
  }
}

module.exports = App;
