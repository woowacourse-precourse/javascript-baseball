const { Console } = require('@woowacourse/mission-utils');
const COMPUTER = require('./Answer');

class App {
  play() {
    this.print('숫자 야구 게임을 시작합니다.');
    this.readLine();
  }

  print(msg) {
    Console.print(msg);
  }

  readLine() {
    Console.readLine(`숫자를 입력해주세요 : `, (input) => {
      const USER_INPUT = input.split('').map((number) => number * 1);
      this.check(USER_INPUT);
    });
  }

  check(USER_INPUT) {
    let countBall = 0;
    let countStrike = 0;
    if (typeof USER_INPUT !== `number` && USER_INPUT.length !== 3) {
      throw new Error('3자리 숫자만 입력해주세요!');
    }

    for (let i = 0; i < COMPUTER.length; i += 1) {
      for (let j = 0; j < USER_INPUT.length; j += 1) {
        if (COMPUTER[i] === USER_INPUT[j]) {
          countBall += 1;
        }
      }
    }
    COMPUTER.forEach((number, index) => {
      if (number === USER_INPUT[index]) {
        countStrike += 1;
      }
    });

    if (countBall !== 0 && countStrike === 3) {
      this.result(countBall, countStrike);
      this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.replay();
    } else {
      this.result(countBall, countStrike);
      this.readLine();
    }
  }

  result(countBall, countStrike) {
    if (countBall === 0 && countStrike === 0) {
      this.print(`${COMPUTER} 낫싱`);
    }
    if (countBall === 0 && countStrike !== 0) {
      this.print(`${COMPUTER} ${countStrike}스트라이크`);
    }
    if (countBall !== 0 && countStrike === 0) {
      this.print(`${COMPUTER} ${countBall}볼`);
    }
    if (countBall !== 0 && countStrike !== 0) {
      this.print(`${COMPUTER} ${countBall}볼 ${countStrike}스트라이크`);
    }
    if (countBall !== 0 && countStrike === 3) {
      this.print(`${countStrike}스트라이크`);
    }
  }

  replay() {
    this.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요');
    Console.readLine('', (input) => {
      if (input === '1') {
        this.readLine();
      }
      if (input === '2') {
        this.print('게임을 종료합니다.');
        this.close();
      }
    });
  }

  close() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
