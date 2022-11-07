const { Console } = require('@woowacourse/mission-utils');
const computerUtils = require('./utils/computerUtils');

class App {
  answers = [];
  userInputs = [];

  constructor() {
    this.handleInput = this.handleInput.bind(this);
    this.exitOrPlay = this.exitOrPlay.bind(this);
  }

  handleInput(input) {
    computerUtils.validateInput(input);
    this.userInputs = input.split('').map((input) => Number(input));

    const hint = computerUtils.generateHint(this.userInputs, this.answers);
    Console.print(hint);

    if (hint === '3스트라이크') this.end();

    this.readLine('숫자를 입력해주세요 : ', this.handleInput);
  }

  readLine(question, callback) {
    Console.readLine(question, (input) => callback(input));
  }

  exitOrPlay(input) {
    Number(input) === 1 ? this.play() : this.exit();
  }

  init() {
    this.answers = computerUtils.getRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.init();
    this.readLine('숫자를 입력해주세요 : ', this.handleInput);
  }

  end() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', this.exitOrPlay);
  }

  exit() {
    Console.close();
  }
}

module.exports = App;
