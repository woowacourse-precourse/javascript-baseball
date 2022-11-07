const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.randomNums = [];
    this.inputNums = [];
  }

  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNums();
    await this.getInputNum();
  }

  makeRandomNums() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNums.includes(num)) randomNums.push(num);
    }
    this.randomNums = randomNums;
  }

  getInputNum() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
        this.inputNums = input;
        resolve();
      });
    });
  }
}

const app = new App();
app.play();
// module.exports = App;
