const MissionUtils = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.userNumberArray = [];
  }
  getUserNumberFromInput() {
    let that = this;
    return new Promise(function (resolve, reject) {
      try {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
          that.userNumberArray = [
            ...input
              .toString()
              .split('')
              .map(i => +i),
          ];
          resolve();
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

class Computer {
  constructor() {
    this.computerNumberArray = [];
  }
  setRandomComputerNumberArray() {
    this.computerNumberArray = [];
    while (this.computerNumberArray.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumberArray.includes(number)) {
        this.computerNumberArray.push(number);
      }
    }
  }
}

class App {
  constructor() {
    this.answerMap = new Map();
    this.computer = new Computer();
    this.user = new User();
  }

  initAnswerMap() {
    const map = new Map();
    map.set('strike', 0);
    map.set('ball', 0);

    this.answerMap = map;
  }

  compareUserAndComputerNumber() {
    this.user.userNumberArray.forEach((userNumber, userNumberArrayIndex) => {
      const index = this.computer.computerNumberArray.indexOf(userNumber);
      if (index === userNumberArrayIndex) {
        this.answerMap.set('strike', this.answerMap.get('strike') + 1);
      } else if (index >= 0) {
        this.answerMap.set('ball', this.answerMap.get('ball') + 1);
      }
    });
    const strike = this.answerMap.get('strike');
    const ball = this.answerMap.get('ball');
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike} 스트라이크`);
      if (strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
        return this.askRestartApp();
      }
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball} 볼`);
    } else {
      MissionUtils.Console.print(`${ball} 볼 ${strike} 스트라이크`);
    }
    this.startApp();
  }

  askRestartApp() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
      input => {
        if (input === '1') {
          this.startApp('restart');
        } else if (input === '2') {
          this.endApp();
        } else {
          throw Error('잘못된 번호를 입력하였습니다.');
        }
      },
    );
  }

  endApp() {
    MissionUtils.Console.close();
  }

  async startApp(start) {
    if (start === 'restart') this.computer.setRandomComputerNumberArray();
    this.initAnswerMap();
    try {
      await this.user.getUserNumberFromInput();
    } catch (e) {
      throw Error(e);
    }
    this.compareUserAndComputerNumber();
  }

  play() {
    MissionUtils.Console.print('play');
    this.computer.setRandomComputerNumberArray();
    this.startApp();
  }
}

MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
const app = new App();
app.play();

module.exports = App;
