const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_COMMENT = '숫자 야구 게임을 시작합니다.';
const GAME_END = `3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`;
const INPUT_NUMBER = '숫자를 입력해주세요 : ';
const STRIKE = '스트라이크';
const BALL = '볼';
const NOTHING = '낫싱';

const ERROR_MESSAGE = {
  TYPE: '숫자가 아닙니다',
  LENGTH: '3자리 숫자여야 합니다',
  GAME_END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class App {
  #answer;
  strike;
  ball;
  result;

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

  gameClear(value) {
    // 게임 클리어시
  }

  getCorrectAnswer() {
    if (this.strike === 3 && this.ball === 0) {
      this.result = `${this.strike}${STRIKE}`;
      MissionUtils.Console.print(this.result);
      MissionUtils.Console.readLine(GAME_END, (value) => {
        this.gameClear(value);
      });
    }
  }

  getWrongAnswer() {
    if (this.strike === 0 && this.ball === 0) {
      this.result = `${NOTHING}`;
    } else {
      this.result = [
        `${this.ball === 0 ? '' : `${this.ball}${BALL}`}`,
        `${this.strike === 0 ? '' : `${this.strike}${STRIKE}`}`,
      ].join(' ');
    }
  }

  printResult() {
    this.getCorrectAnswer();
    this.getWrongAnswer();
    MissionUtils.Console.print(this.result);
    this.play();
  }

  play() {
    MissionUtils.Console.readLine(INPUT_NUMBER, (value) => {
      this.isValidNumber(value);
      this.checkStirkeOrBall(value);
      this.printResult();
    });
  }
}

module.exports = App;
