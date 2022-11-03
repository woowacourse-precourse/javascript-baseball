const { Random, Console } = require('@woowacourse/mission-utils');

const GAME_MESSAGE = {
  startNotification: '숫자 야구 게임을 시작합니다.',
  requestInput: '숫자를 입력해주세요 : ',
  gameOver: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

const ERROR_MESSAGE = {
  duplicateError: '중복 된 숫자를 입력할 수 없습니다',
  invalidValueError: '1~9까지의 숫자 중 세개의 숫자를 입력해주세요',
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

const haveDuplicateNumber = (userInputNumbers) => {
  const duplicateNumber = userInputNumbers.filter((num) => {
    return userInputNumbers.indexOf(num) !== userInputNumbers.lastIndexOf(num);
  });
  if (duplicateNumber.length > 0) {
    throw Error(ERROR_MESSAGE.duplicateError);
  }
};

const isValidNumber = (userInputValue) => {
  const regex = /^[1-9]{3}$/;
  if (!regex.test(userInputValue.join(''))) {
    throw Error(ERROR_MESSAGE.invalidValueError);
  }
};

const stringToNumbers = (string) => [...string].map((char) => +char);

const offerUserInput = async (message) => {
  return new Promise((resolve) => {
    Console.readLine(message, (num) => resolve(num));
  });
};

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.initGameResult();
    this.userInputNumbers;
  }

  play() {
    this.gameStart();
  }
  offerComputerRandomNumbers() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
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
    this.userInputNumbers = stringToNumbers(userInputValue);
    this.isValid();
  }
  isValid() {
    isValidNumber(this.userInputNumbers);
    haveDuplicateNumber(this.userInputNumbers);
    this.setGameResult();
  }
  setGameResult() {
    this.gameResult.strike = getStrikeCount(
      this.computerNumbers,
      this.userInputNumbers
    );
    this.gameResult.ball = getBallCount(
      this.computerNumbers,
      this.userInputNumbers,
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
    this.askUserToRestart();
  }
  retry() {
    this.initGameResult();
    this.getUserInputNumbers();
  }
  isUserWantRestart() {}
}

const app = new App();
app.play();

module.exports = App;
