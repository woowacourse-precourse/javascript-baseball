const MissionUtils = require("@woowacourse/mission-utils");

function checkLength(answer) {
  if (answer.length !== 3) throw new Error('숫자 세 개를 입력해주세요.');
}

function checkNumber(answer) {
  if (!parseInt(answer)) throw new Error('숫자만 입력해주세요.');
}
class App {
  constructor() {
    this.computerRandomNumber = this.createRandomNumber();
  }

  createRandomNumber() {
    const computerRandomNumber = [];
    while (computerRandomNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNumber.includes(number)) {
        computerRandomNumber.push(number);
      }
    }
    return computerRandomNumber;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      try {
        checkNumber(answer);
        checkLength(answer);
      } catch (error) {
        console.log(error);
      }
    });
  }
}
const app = new App();
app.play();
module.exports = App;
