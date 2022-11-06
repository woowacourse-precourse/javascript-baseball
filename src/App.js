const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computer = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = this.setAnswer();
    this.input();
  }

  setAnswer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', userNumber => {
      const { strike, ball } = this.checkAnswer(userNumber);
      console.log(strike, ball);
    });
  }
  checkAnswer(userNumber) {
    const userNumberArr = userNumber.split('').map(Number);
    let [strike, ball] = [0, 0];

    userNumberArr.forEach((number, idx) => {
      const findIndex = this.computer.indexOf(number);
      if (findIndex === idx) strike += 1;
      else if (findIndex !== -1) ball += 1;
    });
    return { strike, ball };
  }
}

const app = new App();
app.play();
// module.exports = App;
