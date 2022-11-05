const MissionUtils = require('@woowacourse/mission-utils');
const User = require('./User.js');
const Computer = require('./Computer.js');

class App {
  constructor() {
    this.answerMap = new Map();
    this.computer = new Computer();
    this.user = new User();
  }

  compareInputToRestart(input) {
    if (input === '1') {
      this.startOrRestartApp('restart');
    } else if (input === '2') {
      this.endApp();
    } else {
      throw Error('잘못된 번호를 입력하였습니다.');
    }
  }

  askRestartApp() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
      input => this.compareInputToRestart(input),
    );
  }

  initAnswerMap() {
    const map = new Map();
    map.set('strike', 0);
    map.set('ball', 0);

    this.answerMap = map;
  }

  compareUserAndComputerNumber() {
    this.setAnswerMapByCompareUserAndComputer();
    this.printResult();
    this.startOrRestartApp('start');
  }

  printResult() {
    const strike = this.answerMap.get('strike');
    const ball = this.answerMap.get('ball');

    if (strike === 3) {
      return this.askRestartApp();
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike} 스트라이크`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball} 볼`);
    } else {
      MissionUtils.Console.print(`${ball} 볼 ${strike} 스트라이크`);
    }
  }

  async startOrRestartApp(start) {
    if (start !== 'restart' && start !== 'start') {
      throw Error('start 명령을 잘못 입력했습니다.');
    }
    if (start === 'restart')
      return this.computer.setRandomComputerNumberArray();

    this.initAnswerMap();
    try {
      await this.user.getNumberArrayFromInput();
    } catch (e) {
      console.log('error');
      throw Error(e);
    }
    this.compareUserAndComputerNumber();
  }

  setAnswerMapByCompareUserAndComputer() {
    this.user.numberArray.forEach((userNumber, userNumberArrayIndex) => {
      const index = this.computer.computerNumberArray.indexOf(userNumber);
      if (index === userNumberArrayIndex) {
        this.answerMap.set('strike', this.answerMap.get('strike') + 1);
      } else if (index >= 0) {
        this.answerMap.set('ball', this.answerMap.get('ball') + 1);
      }
    });
  }

  endApp() {
    MissionUtils.Console.close();
  }

  play() {
    MissionUtils.Console.print('play');
    this.computer.setRandomComputerNumberArray();
    this.startOrRestartApp('start');
  }
}

MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
const app = new App();
app.play();

module.exports = App;
