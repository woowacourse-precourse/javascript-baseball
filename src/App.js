const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}

  printGameStartMessage() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  generateAnswer() {
    this.answer = '';
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer += number;
      }
    }
  }

  getGuess() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.guess = input;
    });
  }
}

module.exports = App;
