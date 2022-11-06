const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = null;
    this.inputNumber = null;
  }
  play() {
    this.getAnswerNumber();
    this.printGameStartMessage();
    this.getInputNumber();
  }
  getAnswerNumber() {
    const RANGE_START_NUMBER = 1;
    const RANGE_END_NUMBER = 9;
    const NUMBER_OF_DIGITS = 3;

    const ANSWER = MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE_START_NUMBER,
      RANGE_END_NUMBER,
      NUMBER_OF_DIGITS
    );

    this.answer = ANSWER;
  }
  printGameStartMessage() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    Console.print(GAME_START_MESSAGE);
  }
  getInputNumber() {
    const INPUT_NUMBER_MESSAGE = "숫자를 입력해주세요 : ";
    Console.readLine(INPUT_NUMBER_MESSAGE, (inputNumber) => {
      this.handleGameException();
      this.inputNumber = inputNumber;
    });
  }
  handleGameException() {
    let errorMessage = null;
    throw new Error(errorMessage);
  }
}

module.exports = App;
