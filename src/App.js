const { Console, Random } = require('@woowacourse/mission-utils');

const GAME_VALUE = {
  restart: '1',
};

const GAME_MESSAGE = {
  startNotification: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  gameOver:
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요',
  exit: '게임을 종료합니다.',
};

const ERROR_MESSAGE = {
  duplicate: '중복 된 숫자를 입력할 수 없습니다',
  invalidValue: '1~9까지의 숫자 중 세개의 숫자를 입력해주세요',
  invalidRestartValue: '1과 2 중 하나의 숫자를 선택해야 합니다.',
};

const isValidRestartInputValue = (inputValue) => {
  if (!['1', '2'].includes(inputValue)) {
    throw ERROR_MESSAGE.invalidRestartValue;
  }
};

const getGameResultMessage = ({ strike, ball }) => {
  if (strike === 0 && ball === 0) {
    return '낫싱';
  }
  if (strike && ball) {
    return `${ball}볼 ${strike}스트라이크`;
  }
  if (strike) {
    return `${strike}스트라이크`;
  }
  if (ball) {
    return `${ball}볼`;
  }
};

const getSameNumCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num) => computerNumbers.includes(num)).length;
};

const getStrikeCount = (userNumbers, computerNumbers) => {
  return [...userNumbers].filter((num, i) => num === computerNumbers[i]).length;
};

const haveSameNumber = (userNumbers) => {
  if (new Set([...userNumbers]).size < 3) {
    throw ERROR_MESSAGE.duplicateError;
  }
};

const isValidRangeNumber = (userNumbers) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userNumbers)) {
    throw ERROR_MESSAGE.invalidValueError;
  }
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

  return randomNumbers.join('');
};

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.userNumbers;
  }

  offerComputerRandomNumbers() {
    this.computerNumbers = getRandomNumbers(3, 1, 9);
    console.log(this.computerNumbers);
  }

  initGameResult() {
    this.gameResult = { ball: 0, strike: 0 };
  }

  play() {
    Console.print(GAME_MESSAGE.startNotification);
    this.gameStart();
  }

  gameStart() {
    Console.readLine(GAME_MESSAGE.input, (ans) => this.setUserNumbers(ans));
  }

  setUserNumbers(inputValue) {
    this.userNumbers = inputValue;
    this.isValidInput();
  }

  isValidInput() {
    isValidRangeNumber(this.userNumbers);
    haveSameNumber(this.userNumbers);
    this.setGameResult();
  }

  setGameResult() {
    const strikeCnt = getStrikeCount(this.userNumbers, this.computerNumbers);
    const sameNumCnt = getSameNumCount(this.userNumbers, this.computerNumbers);
    this.gameResult.strike = strikeCnt;
    this.gameResult.ball = sameNumCnt - strikeCnt;
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

  retry() {
    this.initGameResult();
    this.gameStart();
  }

  gameOver() {
    Console.print(GAME_MESSAGE.gameOver);
    Console.readLine('', (ans) => this.isOneOrTwo(ans));
  }

  isOneOrTwo(inputValue) {
    isValidRestartInputValue(inputValue);
    inputValue === GAME_VALUE.restart ? this.gameRestart() : this.gameExit();
  }

  gameRestart() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.gameStart();
  }

  gameExit() {
    Console.print(GAME_MESSAGE.exit);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
