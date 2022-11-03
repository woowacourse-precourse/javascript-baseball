const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.initRandomArray();
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.initInputArray(input);

      const resultString = this.getResultString();
      MissionUtils.Console.print(resultString);

      if (resultString === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
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

  getResultString() {
    const { ball, strike } = this.getBallStrike();

    if (ball === 0 && strike === 0) return '낫싱';
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
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