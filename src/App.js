const { Console, Random } = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');

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
    this.user = new User();
    this.checkValid;
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    // 1. 컴퓨터 숫자 만들기
    this.computerNum = this.computer.makeNumbers();
    Console.print(this.computerNum);

    // TODO: 유저의 입력값과 컴퓨터의 숫자가 동일 할 때까지 MATCH
    // 2. 현재 컴퓨터 숫자와 유저의 숫자가 동일한지 판별하기
    let isComputerNumAndUserNumEqual = this.computerNum === this.userInput;
    // 3. 동일해질 때까지 Match -> match
    while (isComputerNumAndUserNumEqual === false) {
      // Match flow
      // 1. 유저가 숫자를 입력한다.
      // 2. 해당 숫자가 유효한지 판단한다.
      // 3. 만약 유효하다면 해당 숫자에 대한 문구(ex. 1볼)를 띄운다
      // 4. 유저의 입력값과 컴퓨터 숫자와 동일한지 여부를 업데이트한다.
      const userInput = this.user.getInputValue();
    }
    // 반복문 탈출 후(= Match 종료) 게임을 다시 할 것 인지 여부를 묻는다.
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
