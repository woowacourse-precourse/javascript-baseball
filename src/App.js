const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./ValidateInput");
const { getStrikeAndBall, getStrikeAndBallText } = require("./StrikeAndBall");

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

      const [strikeCount, ballCount] = getStrikeAndBall(this.threeRandomNumbers, input);
      const resultOutput = getStrikeAndBallText(strikeCount, ballCount);

      MissionUtils.Console.print(resultOutput);

      if (strikeCount === 3) {
        this.endPlayerTurn();
      }
      if (strikeCount !== 3) {
        this.startPlayerTurn();
      }
    });
  }
  endPlayerTurn() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      if (input !== "1" && input !== "2") {
        MissionUtils.Console.close();
        throw new Error("잘못된 입력입니다.");
      }
      if (input === "1") {
        this.play();
      }
      if (input === "2") {
        MissionUtils.Console.close();
      }
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;
