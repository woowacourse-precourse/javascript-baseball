const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {}

  getRandomNumber() {
    this.computer = [];
    while (this.computer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(NUMBER)) {
        this.computer.push(NUMBER);
      }
    }
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.checkInputNumber(String(number).split(''));
    });
  }

  getBalls(inputNumber) {
    let ball = 0;
    inputNumber.forEach((num, idx) => {
      if (
        this.computer.includes(Number(num)) &&
        this.computer.indexOf(Number(num)) !== idx
      ) {
        ball++;
      }
    });
    return ball;
  }

  getStrikes(inputNumber) {
    let strike = 0;
    inputNumber.forEach((num, idx) => {
      if (Number(num) === this.computer[idx]) {
        strike++;
      }
    });
    return strike;
  }

  threeStrikes() {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (number) => {
        if (Number(number) === 1) {
          this.getRandomNumber();
          this.getInputNumber();
        } else if (Number(number) === 2) {
          MissionUtils.Console.close();
        } else {
          throw '입력값이 잘못되었습니다.';
        }
      }
    );
  }

  getHintMessage(inputNumber) {
    const BALL = this.getBalls(inputNumber);
    const STRIKE = this.getStrikes(inputNumber);
    if (STRIKE === 3) {
      this.threeStrikes();
    } else if (BALL && !STRIKE) {
      MissionUtils.Console.print(`${BALL}볼`);
      this.getInputNumber();
    } else if (BALL && STRIKE) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      this.getInputNumber();
    } else if (!BALL && STRIKE) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
      this.getInputNumber();
    } else if (!BALL && !STRIKE) {
      MissionUtils.Console.print('낫싱');
      this.getInputNumber();
    }
  }

  checkInputNumber(inputNumber) {
    const NUMBER = inputNumber.filter(
      (num, idx, arr) => arr.indexOf(num) === arr.lastIndexOf(num)
    );
    if (
      inputNumber.includes('0') ||
      inputNumber.length !== 3 ||
      Number(inputNumber.join('')) === NaN ||
      NUMBER.length !== 3
    ) {
      throw '입력값이 잘못되었습니다.';
    } else {
      this.getHintMessage(inputNumber);
    }
  }

  play() {
    this.getRandomNumber();
    this.getInputNumber();
  }
}

module.exports = App;
