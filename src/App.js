const MissionUtils = require('@woowacourse/mission-utils');
const {
  checkInputNumber1To9,
  checkNumberDuplication,
  checkNumberLength,
  getMatchCount,
  convertNumberToStringArray,
  sendErrorMessage,
} = require('./utils');

const NUMBER_DIGIT_LIMIT = 3;
const RESTART = '1';
const END = '2';
const START_MESSAGE = '숫자 야구게임을 시작합니다';
const END_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';

class App {
  #answer;
  #userNumber;
  #result;

  #getComputerNumber() {
    const randomArray = [];

    while (randomArray.length < NUMBER_DIGIT_LIMIT) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      const hasDuplication = randomArray.includes(randomNumber);
      if (!hasDuplication) randomArray.push(randomNumber);
    }

    return randomArray.join('');
  }

  #initialize() {
    MissionUtils.Console.print(START_MESSAGE);
    this.#answer = this.#getComputerNumber();
  }

  checkUserNumberValid(userInput) {
    if (!checkInputNumber1To9(userInput)) {
      sendErrorMessage('1부터 9사이의 숫자를 입력해주세요');
    }
    if (!checkNumberLength(userInput, NUMBER_DIGIT_LIMIT)) {
      sendErrorMessage('세자리 자릿수를 입력해주세요');
    }
    if (!checkNumberDuplication(userInput)) {
      sendErrorMessage('중복된 숫자가 있어요');
    }

    return true;
  }

  #setUserNumber(number) {
    if (this.checkUserNumberValid(number)) {
      this.#userNumber = number;
      this.#getMatchResult();
    }
  }

  #getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.#setUserNumber(number);
    });
  }

  #compareUserNumberWithAnswer(answer, userNumber) {
    const answerArray = convertNumberToStringArray(answer);
    const userNumberArray = convertNumberToStringArray(userNumber);
    return getMatchCount(answerArray, userNumberArray);
  }

  #getResultString() {
    const strikeCount = this.#result.strike;
    const ballCount = this.#result.ball;
    const isNothing = strikeCount === 0 && ballCount === 0;
    const isOnlyBallCount = strikeCount === 0 && ballCount !== 0;
    const isOnlyStrikeCount = strikeCount !== 0 && ballCount === 0;
    if (isNothing) return '낫싱';
    if (isOnlyBallCount) return `${ballCount}볼`;
    if (isOnlyStrikeCount) return `${strikeCount}스트라이크`;

    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }

  #endProcess() {
    MissionUtils.Console.print(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );

    MissionUtils.Console.readLine('', (number) => {
      if (number === RESTART) this.play();
      if (number === END) MissionUtils.Console.close();
      if (number !== RESTART && number !== END) this.#endProcess();
    });
  }

  #getMatchResult() {
    this.#result = this.#compareUserNumberWithAnswer(
      this.#answer,
      this.#userNumber,
    );
    const resultString = this.#getResultString();
    const isGuessCorrect = this.#result.strike === NUMBER_DIGIT_LIMIT;
    MissionUtils.Console.print(resultString);
    if (isGuessCorrect) {
      MissionUtils.Console.print(END_MESSAGE);
      this.#endProcess();
    } else {
      this.#getUserNumber();
    }
  }

  play() {
    this.#initialize();
    this.#getUserNumber();
  }
}

module.exports = App;
