const { Console } = require('@woowacourse/mission-utils');
const computerUtils = require('./utils/computerUtils');

class App {
  answers = [];
  userInputs = [];

  play() {
    this.answers = computerUtils.getRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');

    const handleInput = (input) => {
      computerUtils.validateInput(input);
      this.userInputs = input.split('').map((input) => Number(input));
    };

    this.readLine(handleInput);
  }

  readLine(handleInputCallback) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => handleInputCallback(input));
  }
}

module.exports = App;
