const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computer = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    start();
  }

  start() {
    this.computer = this.setAnswer();
    console.log(this.computer);
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
      const IS_NOTHING = strike === 0 && ball === 0;
      const IS_ANSWER = strike === 3;
      if (IS_ANSWER) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      } else if (IS_NOTHING) MissionUtils.Console.print('낫싱');
      else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
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

  replay() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      number => {
        if (number === 1) this.start();
        else if (number === 2) MissionUtils.Console.close();
        else throw Error('잘못된 입력입니다.');
      },
    );
  }
}

const app = new App();
app.play();
// module.exports = App;
