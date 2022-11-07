const MissionUtils = require("@woowacourse/mission-utils");
class App {
  constructor(gameResult) {
    this.gameResult = gameResult;
  }
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
    this.gameResult = result;
    this.printResult();
  }

  printResult() {
    // 볼, 스트라이크가 둘 다 null인 경우
    if (!this.gameResult.get("볼") && !this.gameResult.get("스트라이크")) {
      MissionUtils.Console.print("낫싱");
      // 모두 맞춘 경우
    } else if (this.gameResult.get("스트라이크") == 3) {
      MissionUtils.Console.print("3스트라이크");
    } else {
      let ball =
        this.gameResult.get("볼") != null
          ? this.gameResult.get("볼") + "볼"
          : "";
      let strike =
        this.gameResult.get("스트라이크") != null
          ? this.gameResult.get("스트라이크") + "스트라이크"
          : "";
      MissionUtils.Console.print(
        ball ? ball.concat(strike ? " " + strike : "") : strike
      );
    }
  }

  isRetry() {
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        if (input == 1) {
          return this.play();
        } else if (input == 2) {
          MissionUtils.Console.print("게임 종료");
        } else {
          throw "유효하지 않은 입력값 입니다.";
        }
      }
    );
  }

  gameStart(computer) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (input) => {
      if (!this.isValidInput(input)) {
        this.executeError(input);
      }
      this.CompareInputWithComputer(input, computer);
      if (this.gameResult.get("스트라이크") == 3) {
        this.isRetry();
      } else {
        this.gameStart(computer);
      }
    });
  }

  executeError() {
    throw "유효하지 않는 숫자입니다.";
  }

  play() {
    let computerNum = this.selectNum();
    this.gameStart(computerNum);
  }
}

module.exports = App;
