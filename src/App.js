const MissionUtils = require('@woowacourse/mission-utils');
const isNumber = require('../src/IsNumber');
const checkStrike = require('../src/CountStrike');
const checkBall = require('../src/CountBall');

class App {
  play() {
    const computer = this.computerRandomNumber();

    this.announceGameStart();
    this.getUserInput(computer);
  }

  announceGameStart() {
    this.print = MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  computerRandomNumber() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.computer = computer;
    return computer;
  }

  getUserInput(computer) {
    MissionUtils.Console.readLine(`숫자를 입력해주세요 : `, number => {
      if (isNumber(number)) {
        const strike = checkStrike(computer, number);
        const ball = checkBall(computer, number);

        this.announceCurrectNumber(computer, strike, ball);
      }
    });
  }

  announceCurrectNumber(computer, strike, ball) {
    if (strike === 3) {
      return this.gameOver();
    }
    if (strike > 0 && ball > 0) {
      this.printMent(computer, `${ball}볼 ${strike}스트라이크`);
    }
    if (strike > 0 && ball === 0) {
      this.printMent(computer, `${strike}스트라이크`);
    }
    if (strike === 0 && ball > 0) {
      this.printMent(computer, `${ball}볼`);
    }
    if (strike === 0 && ball === 0) {
      this.printMent(computer, '낫싱');
    }
    return false;
  }

  printMent(computer, ment) {
    MissionUtils.Console.print(ment);
    this.getUserInput(computer);
  }

  gameOver() {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    return MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입려하세요.\n',
      answer => {
        switch (answer) {
          case '1':
            this.play();
            break;
          case '2':
            MissionUtils.Console.close();
            break;
          default:
            throw new Error('1 또는 2만 입력 해주세요.');
        }
      },
    );
  }
}

module.exports = App;
