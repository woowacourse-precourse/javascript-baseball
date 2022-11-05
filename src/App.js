const MissionUtils = require('@woowacourse/mission-utils');
const generateNumber = require('./generateNumber');
const validateInputValue = require('./validator');

class App {
  play() {
    this.start();
    this.computerNumArr = generateNumber();
    this.getInputAndCompare();
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputAndCompare() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      try {
        const { computerNumArr } = this;
        const isInputValidate = validateInputValue(input);
      } catch (error) {
        this.wrongInput(error);
      }
    });
  }

  wrongInput(err) {}

  close() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
