const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.RANGE_START_NUMBER = 1;
    this.RANGE_END_NUMBER = 9;
    this.NUMBER_OF_DIGITS = 3;

    this.answer = null;
    this.inputNumber = null;
  }
  play() {
    this.getAnswerNumber();
    this.printGameStartMessage();
    this.getInputNumber();
  }
  getAnswerNumber() {
    const ANSWER = MissionUtils.Random.pickUniqueNumbersInRange(
      this.RANGE_START_NUMBER,
      this.RANGE_END_NUMBER,
      this.NUMBER_OF_DIGITS
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
      this.handleGameException(inputNumber);
      this.inputNumber = inputNumber;
    });
  }
  handleGameException(inputNumber) {
    const NOT_A_NUMBER_EXCEPTION = "입력값이 숫자가 아닙니다.";
    const NOT_INTEGER_EXCEPTION = "입력값이 정수가 아닙니다.";
    const NUMBER_OF_DIGITS_EXCEPTION = `입력값이 ${this.NUMBER_OF_DIGITS}자리의 수가 아닙니다.`;
    const SAME_NUMBER_EXCEPTION = "입력한 3자리의 수 중 같은 수가 존재합니다.";

    let errorMessage = null;

    if (isNaN(inputNumber)) {
      errorMessage = NOT_A_NUMBER_EXCEPTION;
    } else {
      return;
    }
    throw new Error(errorMessage);
  }
}

module.exports = App;
