const MissionUtils = require('@woowacourse/mission-utils');

const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.RANGE_START_NUMBER = 1;
    this.RANGE_END_NUMBER = 9;
    this.NUMBER_OF_DIGITS = 3;

    this.answer = null;
    this.inputNumber = null;
    this.numberOfStrike = null;
    this.numberOfBall = null;
  }

  play() {
    let gameStart = true;
    while (gameStart) {
      this.startGame();
      gameStart = this.getInputRestart();
    }
  }

  startGame() {
    this.getAnswerNumber();
    this.printGameStartMessage();

    let gameContinue = true;

    while (gameContinue) {
      this.startTurn();

      gameContinue = !this.isInputNumberCorrect(this.numberOfStrike);

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

    this.answer = answer;
  }

  startTurn() {
    this.setInputNumber();

    this.setNumberOfStrike();
    this.setNumberOfBall();

    this.printGameResultMessage();
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

  setInputNumber() {
    const INPUT_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';

    Console.readLine(INPUT_NUMBER_MESSAGE, (input) => {
      this.handleGameException(input);
      this.inputNumber = input;
      Console.close();
    });
  }

  handleGameException(input) {
    const GAME_EXCEPTION = {
      NOT_A_NUMBER: '입력값이 숫자가 아닙니다.',
      NOT_INTEGER: '입력값이 정수가 아닙니다.',
      NUMBER_OF_DIGITS: `입력값이 ${this.NUMBER_OF_DIGITS}자리의 수가 아닙니다.`,
      SAME_NUMBER: '입력한 3자리의 수 중 같은 수가 존재합니다.',
    };

    Object.freeze(GAME_EXCEPTION);

    switch (true) {
      case isNaN(input):
        throw new Error(GAME_EXCEPTION.NOT_A_NUMBER);
      case this.isNotInteger(input):
        throw new Error(GAME_EXCEPTION.NOT_INTEGER);
      case this.isIncorrectNumberOfDigits(input):
        throw new Error(GAME_EXCEPTION.NUMBER_OF_DIGITS);
      case this.hasSameNumber(input):
        throw new Error(GAME_EXCEPTION.SAME_NUMBER);
    }
  }

  isNotInteger(input) {
    if (Number.isInteger(Number(input))) {
      return false;
    }

    return true;
  }

  isIncorrectNumberOfDigits(input) {
    if (input.length === this.NUMBER_OF_DIGITS) {
      return false;
    }

    return true;
  }

  hasSameNumber(input) {
    let numberCount = {};

    for (const digit of input) {
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

  isInputNumberCorrect() {
    if (this.numberOfStrike === this.NUMBER_OF_DIGITS) {
      return true;
    }

    return false;
  }

  setNumberOfStrike() {
    let numberOfStrike = 0;
    for (let i = 0; i < this.NUMBER_OF_DIGITS; i++) {
      if (this.answer[i] === this.inputNumber[i]) {
        numberOfStrike += 1;
      }
    }

    this.numberOfStrike = numberOfStrike;
  }

  setNumberOfBall() {
    let answerDictinary = {};
    for (const value of this.answer) {
      answerDictinary[value] = true;
    }

    let numberOfBall = 0;
    for (const value of this.inputNumber) {
      if (answerDictinary[value]) {
        numberOfBall += 1;
      }
    }

    numberOfBall -= this.numberOfStrike;

    this.numberOfBall = numberOfBall;
  }

  printGameResultMessage() {
    const MESSAGE = {
      BALL: `${this.numberOfBall}볼`,
      STRIKE: `${this.numberOfStrike}스트라이크`,
      NOTHING: '낫싱',
    };

    Object.freeze(MESSAGE);

    const MESSAGE_BOTH = `${MESSAGE.BALL} ${MESSAGE.STRIKE}`;

    switch (true) {
      case this.numberOfBall > 0 && this.numberOfStrike > 0:
        Console.print(MESSAGE_BOTH);
        break;
      case this.numberOfBall > 0:
        Console.print(MESSAGE.BALL);
        break;
      case this.numberOfStrike > 0:
        Console.print(MESSAGE.STRIKE);
        break;
      case !this.numberOfBall && !this.numberOfStrike:
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

  handleRestartException(input, RESTART, EXIT) {
    const RESTART_EXCEPTION = {
      NOT_A_NUMBER: '입력값이 숫자가 아닙니다.',
      NOT_CORRECT_NUMBER: `입력값이 ${RESTART} 또는 ${EXIT}이(가) 아닙니다.`,
    };

    Object.freeze(RESTART_EXCEPTION);

    switch (true) {
      case isNaN(input):
        throw new Error(RESTART_EXCEPTION.NOT_A_NUMBER);
      case input !== RESTART && input !== EXIT:
        throw new Error(RESTART_EXCEPTION.NOT_CORRECT_NUMBER);
    }
  }
}

module.exports = App;
