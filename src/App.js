const { Console, Random } = require('@woowacourse/mission-utils');

const NUMBER_LIMIT = 3;
const INIT_STATE = {
  input: '',
  inputValid: false,
  inputValid: false,
  isEqualInputAndComputerNum: false,
};

class App {
  constructor() {
    this.state = INIT_STATE;

    this.computer;
    this.user;
    this.checkValid;
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.print(this.state);
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
