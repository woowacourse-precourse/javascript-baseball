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

  isRetry() {
    let inputanswer = 0;
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        inputanswer = input;
      }
    );
    if (inputanswer == 1) {
      this.computerNum = this.selectNum();
      return 1;
    } else if (inputanswer == 2) {
      MissionUtils.Console.print("게임 종료");
      return 0;
    } else {
      throw "유효하지 않은 입력값입니다.";
    }
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
      tMissionUtils.Console.print(this.printResult(compareResult));
      flag = compareResult.get("스트라이크") == 3 ? this.isRetry() : 1;
    }
    MissionUtils.Console.close();
  }
}

module.exports = App;
