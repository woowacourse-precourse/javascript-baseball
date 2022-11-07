const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.RANGE_START_NUMBER = 1;
    this.RANGE_END_NUMBER = 9;
    this.NUMBER_OF_DIGITS = 3;
  }
  play() {
    const answer = this.getAnswerNumber();
    this.printGameStartMessage();
    let inputNumber = this.getInputNumber();
  }
  getAnswerNumber() {
    const answer = MissionUtils.Random.pickUniqueNumbersInRange(
      this.RANGE_START_NUMBER,
      this.RANGE_END_NUMBER,
      this.NUMBER_OF_DIGITS
    );

    return answer;
  }
  printGameStartMessage() {
    const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";
    Console.print(GAME_START_MESSAGE);
  }
  getInputNumber() {
    const INPUT_NUMBER_MESSAGE = "숫자를 입력해주세요 : ";
    Console.readLine(INPUT_NUMBER_MESSAGE, (inputNumber) => {
      this.handleGameException(inputNumber);
      const joinInputNumber = this.joinNumberToString(inputNumber);

      return joinInputNumber;
    });
  }
  joinNumberToString(inputNumber) {
    const stringArr = inputNumber.map((number) => String(number));
    const joinString = stringArr.join("");

    return joinString;
  }
  handleGameException(inputNumber) {
    const NOT_A_NUMBER_EXCEPTION = "입력값이 숫자가 아닙니다.";
    const NOT_INTEGER_EXCEPTION = "입력값이 정수가 아닙니다.";
    const NUMBER_OF_DIGITS_EXCEPTION = `입력값이 ${this.NUMBER_OF_DIGITS}자리의 수가 아닙니다.`;
    const SAME_NUMBER_EXCEPTION = "입력한 3자리의 수 중 같은 수가 존재합니다.";

    let errorMessage = null;

    if (isNaN(inputNumber)) {
      errorMessage = NOT_A_NUMBER_EXCEPTION;
    } else if (this.isNotInteger(inputNumber)) {
      errorMessage = NOT_INTEGER_EXCEPTION;
    } else if (this.isIncorrectNumberOfDigits(inputNumber)) {
      errorMessage = NUMBER_OF_DIGITS_EXCEPTION;
    } else if (this.hasSameNumber(inputNumber)) {
      errorMessage = SAME_NUMBER_EXCEPTION;
    }

    if (errorMessage === null) {
      return;
    }
    throw new Error(errorMessage);
  }
  isNotInteger(inputNumber) {
    if (Number.isInteger(inputNumber)) {
      return false;
    }
    return true;
  }
  isIncorrectNumberOfDigits(inputNumber) {
    if (inputNumber.length === this.NUMBER_OF_DIGITS) {
      return false;
    }
    return true;
  }
  hasSameNumber(inputNumber) {
    const [first, second, third] = inputNumber;

    if (first === second || second === third || first === third) {
      return true;
    }
    return false;
  }
  isInputNumberCorrect(numberOfStrike) {
    if (numberOfStrike === this.NUMBER_OF_DIGITS) {
      return true;
    }
    return false;
  }
  getNumberOfStrike(answer, inputNumber) {
    let numberOfStrike = 0;
    for (let i = 0; i < this.NUMBER_OF_DIGITS; i++) {
      if (answer[i] === inputNumber[i]) {
        numberOfStrike += 1;
      }
    }
    return numberOfStrike;
  }
  getNumberOfBall(answer, inputNumber, numberOfStrike) {
    let answerDictinary = {};
    let numberOfBall = 0;

    for (value of answer) {
      answerDictinary[value] = true;
    }

    for (value of inputNumber) {
      if (answerDictinary[value]) {
        numberOfBall += 1;
      }
    }
    numberOfBall -= numberOfStrike;

    return numberOfBall;
  }
}

module.exports = App;
