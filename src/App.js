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
  }
}

const app = new App();
app.play();

module.exports = App;
