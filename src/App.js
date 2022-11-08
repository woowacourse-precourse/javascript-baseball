const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.START_NUMBER = 1;
    this.END_NUMBER = 9;
    this.DIGITS = 3;
  }

  play() {
    this.printStartMessage();
    let playStatus = true;
    while (playStatus) {
      this.gameStart();
      playStatus = this.restartGame();
    }
  }

  gameStart() {
    const answer = this.getAnswerNumber();
    let gameStatus = true;
    while (gameStatus) {
      let inputNumber = this.numberInput();
      let strikeCount = this.checkStrike(answer, inputNumber);
      let ballCount = this.checkBall(answer, inputNumber, strikeCount);
      gameStatus = this.printCheckResult(strikeCount, ballCount);
    }
  }

  printStartMessage() {
    const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    Console.print(START_MESSAGE);
  }

  getAnswerNumber() {
    const answer = [];
    while (answer.length < this.DIGITS) {
      const number = Random.pickNumberInRange(this.START_NUMBER, this.END_NUMBER);
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
      Console.close();
    });

    return inputNumber;
  }

  isInteger(inputNumber) {
    if (Number.isInteger(Number(inputNumber))) {
      return true;
    }

    return false;
  }

  isDigit(inputNumber) {
    if (inputNumber.length === this.DIGITS) {
      return true;
    }

    return false;
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
    const NOT_DIGIT_EXCEPTION_MESSAGE = `압력값이 ${this.DIGITS}자리 숫자가 아닙니다.`;
    const SAME_NUMBER_EXCEPTION_MESSAGE = '입력값에 중복된 숫자가 존재합니다.';

    let errorMessage = null;
    if (isNaN(inputNumber)) {
      errorMessage = NOT_A_NUMBER_EXCEPTION_MESSAGE;
    } else if (!this.isInteger(inputNumber)) {
      errorMessage = NOT_INTEGER_EXCEPTION_MESSAGE;
    } else if (!this.isDigit(inputNumber)) {
      errorMessage = NOT_DIGIT_EXCEPTION_MESSAGE;
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
    for (var i = 0; i < this.DIGITS; i++) {
      if (Number(inputNumber.charAt(i)) === answer[i]) {
        strikeCount += 1;
      }
    }

    return strikeCount;
  }

  checkBall(answer, inputNumber, strikeCount) {
    let ballCount = 0;
    for (var i = 0; i < this.DIGITS; i++) {
      if (answer.includes(Number(inputNumber.charAt(i)))) {
        ballCount += 1;
      }
    }
    ballCount -= strikeCount;

    return ballCount;
  }

  printCheckResult(strikeCount, ballCount) {
    const HIT_MESSAGE = `${this.DIGITS}개의 숫자를 모두 맞히셨습니다! 게임 종료`;

    if (ballCount && strikeCount) {
      Console.print(ballCount + '볼 ' + strikeCount + '스트라이크');
      return true;
    } else if (ballCount) {
      Console.print(ballCount + '볼');
      return true;
    } else if (strikeCount) {
      Console.print(strikeCount + '스트라이크');
      if (strikeCount === this.DIGITS) {
        Console.print(HIT_MESSAGE);
        return false;
      }
    }
    Console.print('낫싱');
    return true;
  }

  restartGame() {
    const CONTINUE = '1';
    const EXIT = '2';

    const RESTART_MESSAGE = `게임을 새로 시작하려면 ${CONTINUE}, 종료하려면 ${EXIT}를 입력하세요.`;

    let userChoice = null;
    Console.readLine(RESTART_MESSAGE, choice => {
      this.handleRestartInputException(choice);
      userChoice = choice;
      Console.close();
    });

    if (userChoice === CONTINUE) {
      return true;
    }

    return false;
  }

  handleRestartInputException(choice) {
    const CONTINUE = '1';
    const EXIT = '2';

    const NOT_NUMBER_EXCEPTION_MESSAGE = '숫자가 아닙니다.';
    const NOT_INTEGER_EXCEPTION_MESSAGE = '입력값이 정수가 아닙니다.';
    const NOT_NUMBER_IN_RANGE_EXCEPTION_MESSAGE = '입력값이 1 또는 2가 아닙니다.';

    let errorMessage = null;
    if (isNaN(choice)) {
      errorMessage = NOT_NUMBER_EXCEPTION_MESSAGE;
    } else if (!this.isInteger(choice)) {
      errorMessage = NOT_INTEGER_EXCEPTION_MESSAGE;
    } else if (choice != CONTINUE && choice != EXIT) {
      errorMessage = NOT_NUMBER_IN_RANGE_EXCEPTION_MESSAGE;
    }

    if (errorMessage === null) {
      return;
    }

    throw new Error(errorMessage);
  }
}
module.exports = App;
