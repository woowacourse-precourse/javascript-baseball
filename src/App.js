const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Tools = require('./BaseballGameFunc');

class App {
  constructor() {
    this.randomNumberMap = new Map();
    this.flag = true;
  }
  computer() {
    this.randomNumberMap = Tools.makeMap(Tools.generateRandomNumber());
  }

  init() {
    Console.readLine('숫자 입력 >>>\n ', input => {
      Tools.inputControl(input);
      const user = Tools.parser(input);
      const gameResult = Tools.countScore(user, this.randomNumberMap);
      const scoreMessage = Tools.scoreMessagePinter(gameResult);

      if (scoreMessage === '3스트라이크') {
        Console.print('게임 종료');
        this.isFinish();
      } else {
        this.int();
      }
    });
  }

  isFinish() {
    Console.readLine('재시작 하시겠습니까? >>>\n', choice => {
      if (Number(choice) === 1) {
        this.init();
      } else if (Number(choice) === 2) {
        Console.close();
      } else {
        throw Error('게임 종료 후 재시작');
      }
    });
  }

  play() {
    this.computer();
    this.init();
  }
}

const app = new App();

app.play();

module.exports = App;
