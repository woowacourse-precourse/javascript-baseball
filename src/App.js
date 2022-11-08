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
      Console.close();
    });

    return inputNumber;
  }

  handleGameException(inputNumber) {
    const GAME_EXCEPTION = {
      NOT_A_NUMBER: '입력값이 숫자가 아닙니다.',
      NOT_INTEGER: '입력값이 정수가 아닙니다.',
      NUMBER_OF_DIGITS: `입력값이 ${this.NUMBER_OF_DIGITS}자리의 수가 아닙니다.`,
      SAME_NUMBER: '입력한 3자리의 수 중 같은 수가 존재합니다.',
    };

    Object.freeze(GAME_EXCEPTION);

    switch (true) {
      case isNaN(inputNumber):
        throw new Error(GAME_EXCEPTION.NOT_A_NUMBER);
      case this.isNotInteger(inputNumber):
        throw new Error(GAME_EXCEPTION.NOT_INTEGER);
      case this.isIncorrectNumberOfDigits(inputNumber):
        throw new Error(GAME_EXCEPTION.NUMBER_OF_DIGITS);
      case this.hasSameNumber(inputNumber):
        throw new Error(GAME_EXCEPTION.SAME_NUMBER);
    }
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
    let numberCount = {};

    for (const digit of inputNumber) {
      if (!numberCount[digit]) {
        numberCount[digit] = 0;
      }

      numberCount[digit] += 1;
    }

    const kindOfDigits = Object.keys(numberCount).length;
    if (kindOfDigits !== this.NUMBER_OF_DIGITS) {
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
    for (const value of answer) {
      answerDictinary[value] = true;
    }

    let numberOfBall = 0;
    for (const value of inputNumber) {
      if (answerDictinary[value]) {
        numberOfBall += 1;
      }
    }

    numberOfBall -= numberOfStrike;

    return numberOfBall;
  }

  printGameResultMessage(numberOfStrike, numberOfBall) {
    const MESSAGE = {
      BALL: `${numberOfBall}볼`,
      STRIKE: `${numberOfStrike}스트라이크`,
      NOTHING: '낫싱',
    };

    Object.freeze(MESSAGE);

    const MESSAGE_BOTH = `${MESSAGE.BALL} ${MESSAGE.STRIKE}`;

    switch (true) {
      case numberOfBall > 0 && numberOfStrike > 0:
        Console.print(MESSAGE_BOTH);
        break;
      case numberOfBall > 0:
        Console.print(MESSAGE.BALL);
        break;
      case numberOfStrike > 0:
        Console.print(MESSAGE.STRIKE);
        break;
      case !numberOfBall && !numberOfStrike:
        Console.print(MESSAGE.NOTHING);
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
      Console.close();
    });

    if (inputRestart === RESTART) {
      return true;
    }

    return false;
  }

  handleRestartException(inputRestart, RESTART, EXIT) {
    const RESTART_EXCEPTION = {
      NOT_A_NUMBER: '입력값이 숫자가 아닙니다.',
      NOT_CORRECT_NUMBER: `입력값이 ${RESTART} 또는 ${EXIT}이(가) 아닙니다.`,
    };

    Object.freeze(RESTART_EXCEPTION);

    switch (true) {
      case isNaN(inputRestart):
        throw new Error(RESTART_EXCEPTION.NOT_A_NUMBER);
      case inputRestart !== RESTART && inputRestart !== EXIT:
        throw new Error(RESTART_EXCEPTION.NOT_CORRECT_NUMBER);
    }
  }
}

module.exports = App;
