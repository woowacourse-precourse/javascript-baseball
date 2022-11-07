const { Console } = require('@woowacourse/mission-utils');
const computerUtils = require('./utils/computerUtils');

class App {
  answers = [];
  userInputs = [];

  handleInput = (input) => {
    computerUtils.validateInput(input);
    this.userInputs = input.split('').map((input) => Number(input));

    const hint = computerUtils.generateHint(this.userInputs, this.answers);
    Console.print(hint);

    this.readLine(this.handleInput);
  };

  readLine(handleInputCallback) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => handleInputCallback(input));
  }

  init() {
    this.answers = computerUtils.getRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.init();
    this.readLine(this.handleInput);
  }
}

module.exports = App;
