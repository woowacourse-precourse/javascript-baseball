const { Console, Random } = require('@woowacourse/mission-utils');
const VALID_INPUT_REGEX = /^[1-9]{3}$/;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      this.inputAnswer();
    } catch (err) {
      this.exit();
      throw err;
    }
  }

  inputAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (this.isInvalidInput(answer)) {
        throw new Error('잘못된 입력입니다. 게임 종료');
      }

      this.inputAnswer();
    });
  }

  exit() {
    Console.close();
  }

  isInvalidInput(inputValue) {
    return !VALID_INPUT_REGEX.test(inputValue);
  }
}

new App().play();

module.exports = App;
