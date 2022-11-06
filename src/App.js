const MissionUtils = require('@woowacourse/mission-utils');
const User = require('./User.js');
const Computer = require('./Computer.js');

class App {
  constructor() {
    this.answerMap = new Map();
    this.computer = new Computer();
    this.user = new User();
  }

  compareInputToRestart(input, resolve, reject) {
    if (input !== '1' && input !== '2') {
      return reject('잘못된 숫자를 입력하였습니다.');
    }

    if (input === '1') {
      this.startOrRestartApp('restart');
    } else if (input === '2') {
      this.endApp();
    }
  }

  askRestartApp() {
    return new Promise((resolve, reject) =>
      MissionUtils.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
        input => this.compareInputToRestart(input, resolve, reject),
      ),
    );
  }

  initAnswerMap() {
    const map = new Map();
    map.set('strike', 0);
    map.set('ball', 0);

    this.answerMap = map;
  }

  async compareUserAndComputerNumber() {
    this.setAnswerMapByCompareUserAndComputer();
    await this.printResult();
    this.startOrRestartApp('start');
  }

  async printResult() {
    const strike = this.answerMap.get('strike');
    const ball = this.answerMap.get('ball');

    if (strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askRestartApp();
    }

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  validStartInput(start) {
    if (start !== 'restart' && start !== 'start') {
      throw new Error('start 명령을 잘못 입력했습니다.');
    }

    if (start === 'restart') this.computer.setRandomNumberArray();
  }

  async startOrRestartApp(start) {
    this.validStartInput(start);
    this.initAnswerMap();
    await this.user.getNumberArrayFromInput();
    await this.compareUserAndComputerNumber();
  }

  setAnswerMapByCompareUserAndComputer() {
    let that = this;
    this.user.numberArray.forEach((userNumber, userNumberArrayIndex) =>
      that.compareAnswerMapByCompareUserAndComputer(
        userNumber,
        userNumberArrayIndex,
      ),
    );
  }

  compareAnswerMapByCompareUserAndComputer(userNumber, userNumberArrayIndex) {
    const index = this.computer.numberArray.indexOf(userNumber);
    if (index === userNumberArrayIndex) this.setAnswerMapStrikePlusOne();
    else if (index >= 0) this.setAnswerMapBallPlusOne();
  }

  setAnswerMapStrikePlusOne() {
    this.answerMap.set('strike', this.answerMap.get('strike') + 1);
  }

  setAnswerMapBallPlusOne() {
    this.answerMap.set('ball', this.answerMap.get('ball') + 1);
  }

  endApp() {
    MissionUtils.Console.print('게임 종료');
    MissionUtils.Console.close();
  }

  async play() {
    this.computer.setRandomNumberArray();
    try {
      await this.startOrRestartApp('start');
    } catch (error) {
      MissionUtils.Console.print(error);
      this.endApp();
      throw new Error(error);
    }
  }
}

MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
const app = new App();
app.play();

module.exports = App;
