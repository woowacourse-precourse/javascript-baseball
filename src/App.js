const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.initRandomArray();
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.initInputArray(input);

      const { ball, strike } = this.getBallStrike();
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);

      if (input === '2') {
        MissionUtils.Console.close();
      } else {
        this.play();
      }
    });
  }

  initRandomArray() {
    const randomArray = [];
    while (randomArray.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArray.includes(random)) {
        randomArray.push(random);
      }
    }
  
    this.randomArray = randomArray;
  }

  initInputArray(input) {
    const inputArray = [];
    input.split('').forEach((character) => {
      inputArray.push(parseInt(character));
    });

    this.inputArray = inputArray;
  }

  getBallStrike() {
    let ball = 0, strike = 0;

    for (let i = 0; i <= 2; i++) {
      if (this.randomArray[i] === this.inputArray[i]) {
        strike += 1;
      } else if (this.randomArray.includes(this.inputArray[i])) {
        ball += 1;
      }
    }

    return { ball, strike };
  }
}

module.exports = App;

const app = new App();
app.play();