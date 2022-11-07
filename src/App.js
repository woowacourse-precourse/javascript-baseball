const MissionUtils = require("@woowacourse/mission-utils");
const AnswerListClass = require("./answerList");
const ErrorClass = require("./error");
const RandomNumberGeneratorClass = require("./randomGenerator");
const ToolsClass = require("./tools");
class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.RANDOM_NUMBER_ARRAY = [];
    this.INPUT_USER_NUMBER = 0;
    this.error = new ErrorClass();
    this.randomNumberGenerator = new RandomNumberGeneratorClass();
    this.answer = new AnswerListClass();
    this.tools = new ToolsClass();
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  play() {
    this.RANDOM_NUMBER_ARRAY = this.randomNumberGenerator.randomNumber();
    return this.initNumber();
  }

  initNumber() {
    MissionUtils.Console.readLine("숫자를 입력하세요. : ", (inputNumber) => {
      this.INPUT_USER_NUMBER = inputNumber;
      !this.error.errorCheck(this.INPUT_USER_NUMBER) &&
        this.strikeAndBallCount();
    });
  }

  strikeAndBallCount() {
    this.strikeCount = 0;
    this.ballCount = 0;
    const StringToArray = this.tools.splitArray(this.INPUT_USER_NUMBER);
    StringToArray.forEach((arrayInNumber, arrayIndex) => {
      const NUMBER_TYPE_STRING = Number(arrayInNumber);
      if (NUMBER_TYPE_STRING === this.RANDOM_NUMBER_ARRAY[arrayIndex]) {
        return (this.strikeCount += 1);
      }
      this.tools.arrayInCheck(this.RANDOM_NUMBER_ARRAY, NUMBER_TYPE_STRING) &&
        (this.ballCount += 1);
    });
    return this.printResult();
  }

  printResult() {
    const ANSWER_RESULT = this.answer.choiceAnswer(
      this.strikeCount,
      this.ballCount
    );
    return ANSWER_RESULT ? this.MenuPage() : this.initNumber();
  }

  gameStop() {
    MissionUtils.Console.print("종료");
    return MissionUtils.Console.close();
  }
  MenuPage() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (menuNumber) => {
        if (menuNumber === "1") {
          return this.play();
        }
        if (menuNumber === "2") {
          return this.gameStop();
        }
        throw new Error("잘못된 값을 입력하셨습니다.");
      }
    );
  }
}

module.exports = App;
