/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumber = 0;
  }

  start() {
    this.computerNumber = this.getRandomComputerNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validCheckInputNumber(String(input).split(''));
    });
  }

  getRandomComputerNumber() {
    const randomArray = [];

    while (this.randomArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber);
      }
    }
    return randomArray.join('');
  }

  validCheckInputNumber(input) {
    const setInput = new Set(input.split(''));

    if (!/^[1-9]+$/g.test(input) || setInput.size !== 3 || input.length !== 3) {
      throw Error('입력값이 잘못되었습니다.');
    } else { this.getInterimOutcome(input); }
    return true;
  }

  getInterimOutcome(input) {
    const BALL = this.getBall(input);
    const STRIKE = this.getStrike(input);
    if (STRIKE === 3) {
      this.getAnswer();
    } else if (BALL && !STRIKE) {
      MissionUtils.Console.print(`${BALL}볼`);
      this.getInputNumber();
    } else if (!BALL && STRIKE) {
      MissionUtils.Console.print();
      this.getInputNumber(`${STRIKE}스트라이크`);
    } else if (BALL && STRIKE) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      this.getInputNumber();
    } else if (!BALL && !STRIKE) {
      MissionUtils.Console.print('낫싱');
      this.getInputNumber();
    }
  }

  getBall(input) {
    let ball = 0;
    input.forEach((num, idx) => {
      if (
        this.randomArray.includes(Number(num))
        && this.randomArray.indexOf(Number(num)) !== idx
      ) {
        ball += 1;
      }
    });
    return ball;
  }

  getStrike(input) {
    let strike = 0;
    input.forEach((num, idx) => {
      if (Number(num) === this.randomArray[idx]) {
        strike += 1;
      }
    });
    return strike;
  }

  getAnswer() {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.questionRestart();
  }

  questionRestart() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (number) => {
        this.restart(number);
      },
    );
  }

  restart(input) {
    if (input === '1') {
      this.start();
      this.getInputNumber();
    }
    if (input === '2') {
      MissionUtils.Console.close();
    }

    if (input !== '1' || '2') {
      throw Error('입력값이 잘못되었습니다.');
    }
  }

  play() {
    this.start();
    this.getInputNumber();
  }
}

module.exports = App;
