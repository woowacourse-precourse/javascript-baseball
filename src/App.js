const MissionUtils = require("@woowacourse/mission-utils");
const validateInput = require("./ValidateInput");
const getStrikeAndBall = require("./StrikeAndBall");
const getStrikeAndBallText = require("./StrikeAndBallText");
const getThreeRandomNumbers = require("./ThreeRandomNumbers");
const throwError = require("./ThrowError");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.threeRandomNumbers = getThreeRandomNumbers();
  }

  play() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      if (!validateInput(input)) {
        throwError();
      }

      const [strikeCount, ballCount] = getStrikeAndBall(this.threeRandomNumbers, input);
      MissionUtils.Console.print(getStrikeAndBallText(strikeCount, ballCount));

      if (strikeCount === 3) {
        this.end();
      }

      this.play();
    });
  }

  end() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (input) => {
      if (input !== "1" && input !== "2") {
        this.throwError();
      }
      if (input === "1") {
        this.threeRandomNumbers = getThreeRandomNumbers();
        this.play();
      }
      if (input === "2") {
        MissionUtils.Console.close();
      }
    });
  }
}

module.exports = App;
