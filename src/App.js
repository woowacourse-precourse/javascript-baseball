const { Console, Random } = require("@woowacourse/mission-utils/");
class App {
  constructor(gameResult) {
    this.gameResult = gameResult;
  }

  play() {
    let computerNum = this.setComputerNum();
    this.gameStart(computerNum);
  }

  setComputerNum() {
    const NumSet = new Set();
    while (NumSet.size < 3) {
      NumSet.add(Random.pickNumberInRange(1, 9));
    }

    return Number([...NumSet].join(""));
  }

  gameStart(computer) {
    if (this.gameResult == undefined)
      Console.print("숫자 야구 게임을 시작합니다.");
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!this.isValidInput(input)) {
        throw "유효하지 않은 숫자입니다.";
      }

      this.CompareInputWithComputer(input, computer);

      this.gameResult.get("스트라이크") == 3
        ? this.isRetry()
        : this.gameStart(computer);
    });
  }

  isValidInput(input) {
    return (
      new RegExp(/^[1-9]{3}$/).test(String(input)) && // 1부터 9까지 수로 이루어진 3자리의 수
      !new RegExp(/([1-9])\1/).test(String(input)) // 중복되는 숫자가 없는 수
    );
  }

  CompareInputWithComputer(input, computer) {
    let inputArray = this.NumberToArray(input);

    let computerArray = this.NumberToArray(computer);

    let result = new Map();
    result.set("스트라이크", null);
    result.set("볼", null);

    inputArray.forEach((element, idx) => {
      switch (computerArray.indexOf(element)) {
        case idx: // 같은 자리수의 숫자일때, 스트라이크
          result.set("스트라이크", result.get("스트라이크") + 1 ?? 1);
          break;

        case -1: // 동일한 숫자가 없을때
          break;

        default: // 같은 숫자가 다른 자리수일때, 볼
          result.set("볼", result.get("볼") + 1 ?? 1);
      }
    });

    this.gameResult = result;

    this.printResult();
  }

  NumberToArray(number) {
    return String(number)
      .split("")
      .map((num) => Number(num));
  }

  printResult() {
    let result = this.gameResult;

    let strike = result.get("스트라이크")
      ? result.get("스트라이크") + "스트라이크"
      : null;
    let ball = result.get("볼") ? result.get("볼") + "볼" : null;

    switch (ball) {
      case null:
        Console.print(strike ?? "낫싱");
        break;
      default:
        Console.print(ball + (strike ? " " + strike : ""));
    }
  }

  isRetry() {
    let userQuestion =
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n" +
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";

    Console.readLine(userQuestion, (input) => {
      switch (input) {
        case "1":
          return this.play();
        case "2":
          Console.print("게임 종료");
          Console.close();
          break;
        default:
          throw "유효하지 않은 입력값입니다.";
      }
    });
  }
}

module.exports = App;
