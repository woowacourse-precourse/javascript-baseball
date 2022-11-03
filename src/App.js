const { Console, Random } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');

const NUMBER_LIMIT = 3;
const INIT_STATE = {
  userInput: '',
  computerNum: '',
  isUserInputValid: false,
  isEqualInputAndComputerNum: false,
};

class App {
  constructor() {
    this.state = INIT_STATE;

    this.computer = new Computer(NUMBER_LIMIT);
    this.user;
    this.checkValid;
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    // 1. 컴퓨터 숫자 만들기
    this.computerNum = this.computer.makeNumbers();
    Console.print(this.computerNum);

    // 2. 현재 컴퓨터 숫자와 유저의 숫자가 동일한지 판별하기
    // 3. 동일하지 않다면 -> match

    // TODO: 유저의 입력값과 컴퓨터의 숫자가 동일 할 때까지 MATCH
  }

  play() {
    this.start();
  }

  restart() {
    this.start = INIT_STATE;
    this.play();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
