const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const ramdomArray = this.getRandomArray();
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      MissionUtils.Console.print('2스트라이크');

      if (input === '2') {
        MissionUtils.Console.close();
      } else {
        this.play();
      }
    });
  }

  getRandomArray() {
    const randomArray = [];
    while (randomArray.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArray.includes(random)) {
        randomArray.push(random);
      }
    }
  
    return randomArray;
  }
}

module.exports = App;

const app = new App();
app.play();