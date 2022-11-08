const MissionUtils = require("@woowacourse/mission-utils");

class App {
  randomNumbers;
  strikeCount;

  constructor(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  setRandomNumbers() {
    const result = [];
    for (let i = 0; i < 3; i++) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      result.includes(num) ? i-- : result.push(num);
    }
    return result;
  }

  inputExceptionHandling(inputNumber) {
    if(inputNumber.includes("0")){
      throw new Error("0은 입력할 수 없습니다.")
    }
    if (isNaN(inputNumber)) {
      throw new Error("숫자가 아닙니다.");
    }
    if ([...new Set(inputNumber.split(""))].length !== 3) {
      throw new Error("중복되는 숫자가 입력되었습니다.");
    }
    if (inputNumber.length > 3) {
      throw new Error("숫자가 초과했습니다.(3개만 입력)");
    }
  }

  checkInputNumbers(inputNumbers, randomNumbers) {
    this.strikeCount = 0;
    let ballCount = 0;

    inputNumbers.map((value, index) => {
      value === randomNumbers[index]
        ? (this.strikeCount += 1)
        : randomNumbers.includes(value)
        ? (ballCount += 1)
        : null;
    });

    return [ballCount, this.strikeCount];
  }

  makeCheckedResult([ballCount, strikeCount]) {
    if (ballCount == 0 && strikeCount == 0) {
      return "낫싱";
    }

    const strikeResult = `${strikeCount}스트라이크`;
    const ballResult = `${ballCount}볼`;

    if (ballCount > 0 && strikeCount == 0) {
      return ballResult;
    }
    if (ballCount == 0 && strikeCount > 0) {
      return strikeResult;
    }
    return ballResult + " " + strikeResult;
  }

  showGameEndMessage() {
    MissionUtils.Console.print(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (answer) => {
      if (answer == "1") {
        return this.play();
      }
      if (answer == "2") {
        MissionUtils.Console.print("게임 종료");
        return MissionUtils.Console.close();
      }
      throw ("다른 숫자를 입력해서 종료됩니다.");
    });
  }

  startBaseball() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.inputExceptionHandling(userInput);
      const inputNumbers = userInput.split("").map(Number);
      const ballStrikeCount = this.checkInputNumbers(
        inputNumbers,
        this.randomNumbers
      );
      const result = this.makeCheckedResult(ballStrikeCount);
      MissionUtils.Console.print(result);
      if (this.strikeCount === 3) {
        this.showGameEndMessage();
      }
      this.startBaseball();
    });
  }

  play() {
    this.randomNumbers = this.setRandomNumbers();
    this.startBaseball();
  }
}


module.exports = App;