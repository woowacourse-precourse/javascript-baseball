const MissionUtils = require("@woowacourse/mission-utils");

class App {
  randomNumbers;
  gameResult;

  constructor() {
    this.setRandomNumbers();
  }

  setRandomNumbers() {
    this.randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  inputExceptionHandling(inputNumber) {
    if (isNaN(inputNumber)) {
      throw "숫자가 아닙니다.";
    }
    if (inputNumber.length > 3) {
      throw new Error("숫자가 초과했습니다.(3개만 입력)");
    }
    if ([...new Set(inputNumber.split(""))].length !== 3) {
      console.log([...new Set(inputNumber.split[""])]);
      throw "중복되는 숫자가 입력되었습니다.";
    }
  }

  checkInputNumbers(inputNumbers, randomNumbers) {
    const inputNumbers = inputNumbers.split("").map(Number);
    let strikeCount = 0;
    let ballCount = 0;

    inputNumbers.map((value, index) => {
      value === randomNumbers[index]
        ? (strikeCount += 1)
        : randomNumbers.includes(value)
        ? (ballCount += 1)
        : null;
    });

    return [ballCount, strikeCount];
  }

  showNumberResult([ballCount, strikeCount]) {
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

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let inputNum = this.getInputNumbers();
    this.checkInputNumbers(inputNum);
  }
}

const app = new App();
app.play();

module.exports = App;
