const MissionUtils = require('@woowacourse/mission-utils');
const { Console } = MissionUtils;
class App {
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

  printCheckResult(strikeCount, ballCount) {
    const HIT_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    if (ballCount && strikeCount) {
      Console.print(ballCount + '볼 ' + strikeCount + '스트라이크');
      return true;
    } else if (ballCount) {
      Console.print(ballCount + '볼');
      return true;
    } else if (strikeCount) {
      Console.print(strikeCount + '스트라이크');
      if (strikeCount === 3) {
        Console.print(HIT_MESSAGE);
        return false;
      }
    } else {
      Console.print('낫싱');
      return true;
    }
  }

  restartGame() {
    const RESTART_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
    let userChoice = null;
    Console.readLine(RESTART_MESSAGE, choice => {
      this.handleRestartInputException(choice);
      userChoice = choice;
      Console.close();
    });
    if (userChoice === '1') {
      return true;
    } else {
      return false;
    }
  }

  handleRestartInputException(choice) {
    const NOT_NUMBER_EXCEPTION_MESSAGE = '숫자가 아닙니다.';
    const NOT_INTEGER_EXCEPTION_MESSAGE = '입력값이 정수가 아닙니다.';
    const NOT_NUMBER_IN_RANGE_EXCEPTION_MESSAGE = '입력값이 1 또는 2가 아닙니다.';
    let errorMessage = null;
    if (isNaN(choice)) {
      errorMessage = NOT_NUMBER_EXCEPTION_MESSAGE;
    } else if (!this.isInteger(choice)) {
      errorMessage = NOT_INTEGER_EXCEPTION_MESSAGE;
    } else if (choice != '1' && choice != '2') {
      errorMessage = NOT_NUMBER_IN_RANGE_EXCEPTION_MESSAGE;
    }

    if (errorMessage === null) {
      return;
    }
    throw new Error(errorMessage);
  }
}
module.exports = App;
