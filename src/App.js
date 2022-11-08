const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
class App {
  play() {}

  printStartMessage() {
    const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    Console.print(START_MESSAGE);
  }

  getAnswerNumber() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  numberInput() {
    const INPUT_MESSAGE = '숫자를 입력해주세요. : ';
    let inputNumber;
    Console.readLine(INPUT_MESSAGE, number => {
      this.handleInputException(number);
      inputNumber = number;
    });
    return inputNumber;
  }

  isInteger(inputNumber) {
    if (Number.isInteger(Number(inputNumber))) {
      return true;
    } else {
      return false;
    }
  }

  is3Digit(inputNumber) {
    if (inputNumber.length === 3) {
      return true;
    } else {
      return false;
    }
  }

  hasSameNumber(inputNumber) {
    if (inputNumber[0] === inputNumber[1] || inputNumber[1] === inputNumber[2] || inputNumber[2] === inputNumber[0]) {
      return true;
    }
    return false;
  }

  handleInputException(inputNumber) {
    const NOT_A_NUMBER_EXCEPTION_MESSAGE = '입력값이 숫자가 아닙니다.';
    const NOT_INTEGER_EXCEPTION_MESSAGE = '입력값이 정수가 아닙니다.';
    const NOT_3_DIGIT_EXCEPTION_MESSAGE = '압력값이 3자리 숫자가 아닙니다.';
    const SAME_NUMBER_EXCEPTION_MESSAGE = '입력값에 중복된 숫자가 존재합니다.';
    let errorMessage = null;
    if (isNaN(inputNumber)) {
      errorMessage = NOT_A_NUMBER_EXCEPTION_MESSAGE;
    } else if (!this.isInteger(inputNumber)) {
      errorMessage = NOT_INTEGER_EXCEPTION_MESSAGE;
    } else if (!this.is3Digit(inputNumber)) {
      errorMessage = NOT_3_DIGIT_EXCEPTION_MESSAGE;
    } else if (this.hasSameNumber(inputNumber)) {
      errorMessage = SAME_NUMBER_EXCEPTION_MESSAGE;
    }
    if (errorMessage === null) {
      return;
    }
    throw new Error(errorMessage);
  }

  checkStrike(answer, inputNumber) {
    let strikeCount = 0;
    for (var i = 0; i < 3; i++) {
      if (Number(inputNumber.charAt(i)) === answer[i]) {
        strikeCount += 1;
      }
    }
    return strikeCount;
  }

  checkBall(answer, inputNumber, strikeCount) {
    let ballCount = 0;
    for (var i = 0; i < 3; i++) {
      if (answer.includes(Number(inputNumber.charAt(i)))) {
        ballCount += 1;
      }
    }
    ballCount -= strikeCount;
    return ballCount;
  }
}
module.exports = App;
