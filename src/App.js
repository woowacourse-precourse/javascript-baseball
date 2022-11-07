const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.RANGE_START_NUMBER = 1;
    this.RANGE_END_NUMBER = 9;
    this.NUMBER_OF_DIGITS = 3;
  }

  play() {
    let gameStart = true;
    while (gameStart) {
      this.startGame();
      gameStart = this.getInputRestart();
    }
  }

  startGame() {
    const answer = this.getAnswerNumber();
    this.printGameStartMessage();

    let gameContinue = true;
    let inputNumber;

    while (gameContinue) {
      inputNumber = this.getInputNumber();

      const numberOfStrike = this.getNumberOfStrike(answer, inputNumber);
      const numberOfBall = this.getNumberOfBall(
        answer,
        inputNumber,
        numberOfStrike
      );
      this.printGameResultMessage(numberOfStrike, numberOfBall);

      gameContinue = !this.isInputNumberCorrect(numberOfStrike);

      if (!gameContinue) {
        this.printGameEndMessage();
      }
    }
  }

  getAnswerNumber() {
    let answer = [];

    while (answer.length < this.NUMBER_OF_DIGITS) {
      const number = Random.pickNumberInRange(
        this.RANGE_START_NUMBER,
        this.RANGE_END_NUMBER
      );
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    answer = this.joinNumberToString(answer);

    return answer;
  }

  joinNumberToString(numberArr) {
    const stringArr = numberArr.map((number) => String(number));
    const joinString = stringArr.join('');

    return joinString;
  }

  printGameStartMessage() {
    const GAME_START_MESSAGE = '숫자 야구 게임을 시작합니다.';
    Console.print(GAME_START_MESSAGE);
  }

  getInputNumber() {
    const INPUT_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';

    let inputNumber;
    Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      this.handleGameException(input);
      inputNumber = input;
    });

    return inputNumber;
  }

  handleGameException(inputNumber) {
    const NOT_A_NUMBER_EXCEPTION = '입력값이 숫자가 아닙니다.';
    const NOT_INTEGER_EXCEPTION = '입력값이 정수가 아닙니다.';
    const NUMBER_OF_DIGITS_EXCEPTION = `입력값이 ${this.NUMBER_OF_DIGITS}자리의 수가 아닙니다.`;
    const SAME_NUMBER_EXCEPTION = '입력한 3자리의 수 중 같은 수가 존재합니다.';

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
    if (Number.isInteger(Number(inputNumber))) {
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

    for (const value of answer) {
      answerDictinary[value] = true;
    }

    for (const value of inputNumber) {
      if (answerDictinary[value]) {
        numberOfBall += 1;
      }
    }

    numberOfBall -= numberOfStrike;

    return numberOfBall;
  }

  printGameResultMessage(numberOfStrike, numberOfBall) {
    const BALL_MESSAGE = `${numberOfBall}볼`;
    const STRIKE_MESSAGE = `${numberOfStrike}스트라이크`;
    const BOTH_MESSAGE = `${BALL_MESSAGE} ${STRIKE_MESSAGE}`;
    const NOTHING_MESSAGE = '낫싱';

    if (numberOfBall && numberOfStrike) {
      Console.print(BOTH_MESSAGE);
    } else if (numberOfBall) {
      Console.print(BALL_MESSAGE);
    } else if (numberOfStrike) {
      Console.print(STRIKE_MESSAGE);
    } else {
      Console.print(NOTHING_MESSAGE);
    }
  }

  printGameEndMessage() {
    const GAME_END_MESSAGE = `${this.NUMBER_OF_DIGITS}개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    Console.print(GAME_END_MESSAGE);
  }

  getInputRestart() {
    const RESTART = '1';
    const EXIT = '2';
    const POSTPOSITION = '를'; // EXIT의 받침 여부에 따라 을 또는 를
    const INPUT_RESTART_MESSAGE = `게임을 새로 시작하려면 ${RESTART}, 종료하려면 ${EXIT}${POSTPOSITION} 입력하세요.\n`;

    let inputRestart;
    Console.readLine(INPUT_RESTART_MESSAGE, (input) => {
      this.handleRestartException(input, RESTART, EXIT);
      inputRestart = input;
    });

    if (inputRestart === RESTART) {
      return true;
    }

    return false;
  }

  handleRestartException(inputRestart, RESTART, EXIT) {
    const NOT_A_NUMBER_EXCEPTION = '입력값이 숫자가 아닙니다.';
    const NOT_CORRECT_NUMBER = `입력값이 ${RESTART} 또는 ${EXIT}이(가) 아닙니다.`;

    let errorMessage = null;

    if (isNaN(inputRestart)) {
      errorMessage = NOT_A_NUMBER_EXCEPTION;
    } else if (inputRestart !== RESTART && inputRestart !== EXIT) {
      errorMessage = NOT_CORRECT_NUMBER;
    }

    if (errorMessage === null) {
      return;
    }

    throw new Error(errorMessage);
  }
}

module.exports = App;
