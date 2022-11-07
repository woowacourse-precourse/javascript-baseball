const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_COMMENT = '숫자 야구 게임을 시작합니다.';
const INPUT_NUMBER = '숫자를 입력해주세요 : ';

const ERROR_MESSAGE = {
  TYPE: '숫자가 아닙니다',
  LENGTH: '3자리 숫자여야 합니다',
  GAME_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class App {
  #answer;
  strike;
  ball;

  constructor() {
    MissionUtils.Console.print(GAME_START_COMMENT);
    this.makeAnswer();
  }

  makeAnswer() {
    this.#answer = [];
    while (this.#answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  isValidNumber(value) {
    if (!Number(value)) throw new Error(ERROR_MESSAGE.TYPE);
    if (value.length !== 3) throw new Error(ERROR_MESSAGE.LENGTH);
  }

  checkStirkeOrBall(value) {
    const splittedValue = value.toString().split('').map(Number);
    this.strike = 0;
    this.ball = 0;

    this.#answer.forEach((num, index) => {
      if (num === splittedValue[index]) {
        this.strike += 1;
      } else if (splittedValue.includes(num)) {
        this.ball += 1;
      }
    });
  }

  play() {
    MissionUtils.Console.readLine(INPUT_NUMBER, (value) => {
      this.isValidNumber(value);
      this.checkStirkeOrBall(value);
    });
  }
}

module.exports = App;
