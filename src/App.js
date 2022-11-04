const { Random, Console } = require('@woowacourse/mission-utils');

const GAME_VALUE = {
  restart: '1',
};

const GAME_MESSAGE = {
  startNotification: '숫자 야구 게임을 시작합니다.',
  requestInput: '숫자를 입력해주세요 : ',
  gameOver:
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
  exit: '게임을 종료합니다.',
};

const ERROR_MESSAGE = {
  duplicateError: '중복 된 숫자를 입력할 수 없습니다',
  invalidValueError: '1~9까지의 숫자 중 세개의 숫자를 입력해주세요',
  invalidRestartValue: '1과 2 중 하나의 숫자를 선택해야 합니다.',
};

const throwError = (message) => {
  try {
    throw message;
  } catch (error) {
    Console.print('Error: ' + error);
  }
};

const isOneOrTwo = (num) => {
  if (!['1', '2'].includes(num)) {
    throwError(ERROR_MESSAGE.invalidRestartValue);
  }
};

const getGameResultMessage = (gameResult) => {
  if (gameResult.strike === 0 && gameResult.ball === 0) {
    return '낫싱';
  }
  if (gameResult.strike && gameResult.ball) {
    return `${gameResult.ball}볼 ${gameResult.strike}스트라이크`;
  }
  if (gameResult.strike) {
    return `${gameResult.strike}스트라이크`;
  }
  if (gameResult.ball) {
    return `${gameResult.ball}볼`;
  }
};

const getBallCount = (computerNumbers, userNumbers, strikeCount) => {
  const bothHaveNumberLength = userNumbers.filter((num) =>
    computerNumbers.includes(num)
  ).length;

  return bothHaveNumberLength - strikeCount;
};

const getStrikeCount = (computerNumbers, userNumbers) => {
  return userNumbers.filter((_, i) => computerNumbers[i] === userNumbers[i])
    .length;
};

const haveDuplicate = (userNumbers) => {
  const duplicateNumber = userNumbers.filter((num) => {
    return userNumbers.indexOf(num) !== userNumbers.lastIndexOf(num);
  });
  if (duplicateNumber.length > 0) {
    throwError(ERROR_MESSAGE.duplicateError);
    return true;
  }

  return false;
};

const isValidNumber = (userInputValue) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userInputValue.join(''))) {
    throwError(ERROR_MESSAGE.invalidValueError);
    return false;
  }

  return true;
};

const stringToNumbers = (string) => [...string].map((char) => +char);

const offerUserInput = async (message = '') => {
  return new Promise((resolve) => {
    Console.readLine(message, (num) => resolve(num));
  });
};

const getNotContainNumber = (randomNumbers, number) => {
  if (randomNumbers.includes(number)) {
    return [];
  }

  return [number];
};

const getRandomNumbers = (size, start, end) => {
  let randomNumbers = [];
  while (randomNumbers.length < size) {
    const number = Random.pickNumberInRange(start, end);
    const notContainNumber = getNotContainNumber(randomNumbers, number);
    randomNumbers = [...randomNumbers, ...notContainNumber];
  }

  return randomNumbers;
};

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.userNumbers;
  }

  play() {
    this.gameStart();
  }
  offerComputerRandomNumbers() {
    this.computerNumbers = getRandomNumbers(3, 1, 9);
    console.log(this.computerNumbers);
  }
  initGameResult() {
    this.gameResult = { ball: 0, strike: 0 };
  }
  gameStart() {
    Console.print(GAME_MESSAGE.startNotification);
    this.getUserInputNumbers();
  }
  async getUserInputNumbers() {
    const userInputValue = await offerUserInput(GAME_MESSAGE.requestInput);
    this.userNumbers = stringToNumbers(userInputValue);
    this.isValidRangeNumber();
  }
  isValidRangeNumber() {
    isValidNumber(this.userNumbers) ? this.haveSameNumber() : this.gameExit();
  }
  haveSameNumber() {
    haveDuplicate(this.userNumbers) ? this.gameExit() : this.setGameResult();
  }
  setGameResult() {
    this.gameResult.strike = getStrikeCount(
      this.computerNumbers,
      this.userNumbers
    );
    this.gameResult.ball = getBallCount(
      this.computerNumbers,
      this.userNumbers,
      this.gameResult.strike
    );
    this.printGameResult();
  }
  printGameResult() {
    const gameResultMessage = getGameResultMessage(this.gameResult);
    Console.print(gameResultMessage);
    this.isUserWin();
  }
  isUserWin() {
    this.gameResult.strike === 3 ? this.gameOver() : this.retry();
  }
  gameOver() {
    Console.print(GAME_MESSAGE.gameOver);
    this.doesUserWantRestart();
  }
  retry() {
    this.initGameResult();
    this.getUserInputNumbers();
  }
  async doesUserWantRestart() {
    const inputValue = await offerUserInput();
    isOneOrTwo(inputValue);
    inputValue === GAME_VALUE.restart ? this.restart() : this.gameExit();
  }
  restart() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.gameStart();
  }
  gameExit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
