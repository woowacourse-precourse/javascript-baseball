const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./ValidateInput");
const StrikeAndBall = require("./StrikeAndBall");

class App {
  constructor() {
    this.printGameStartPhrase();
  }

  play() {
    this.threeRandomNumbers = this.drawThreeRandomNumbers();

    this.startPlayerTurn();
  }

  drawThreeRandomNumbers() {
    const threeRandomNumber = new Set();
    while (threeRandomNumber.size < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      threeRandomNumber.add(newNumber);
    }

    return [...threeRandomNumber].join("");
  }

  printGameStartPhrase() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  startPlayerTurn() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!validateInput(input)) {
        MissionUtils.Console.close();
        throw new Error("잘못된 입력입니다.");
      }

      const [strikeCount, ballCount] = StrikeAndBall.getResult(this.threeRandomNumbers, input);
      const resultOutput = StrikeAndBall.getString(strikeCount, ballCount);

      MissionUtils.Console.print(resultOutput);

      if (strikeCount === 3) {
        MissionUtils.Console.print("게임 종료");
        MissionUtils.Console.close();
      }
      if (strikeCount !== 3) {
        this.startPlayerTurn();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
