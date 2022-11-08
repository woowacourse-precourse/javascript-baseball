const MissionUtils = require('@woowacourse/mission-utils');

class App {
  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  convertToNumberArray(numbers) {
    return numbers.split('').map(Number);
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.getRandomNumbers();

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const player = this.convertToNumberArray(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
