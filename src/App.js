const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #RANDOM_NUMBER = [];

  #USER_INPUT = [];

  // 컴퓨터가 사용할 랜덤한 숫자를 구하는 기능
  static getRandomNumber() {
    const RANDOM_SET = new Set();
    while (RANDOM_SET.size < 3) {
      RANDOM_SET.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    const RANDOM_NUMBER = [...RANDOM_SET];
    return RANDOM_NUMBER;
  }

  // 사용자의 입력을 받는 기능
  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (!App.isValidUserInput(answer)) {
        throw new Error('잘못된 값을 입력하였습니다!');
      }
      this.#USER_INPUT = [...answer].map(number => +number);
      this.getComputerOutput();
    });
  }

  // 사용자가 입력한 값이 적절한지 검증하는 기능
  static isValidUserInput(input) {
    const REGEX = /^[1-9]{3}$/;
    const INPUT_SET = new Set(input);
    if (REGEX.test(input) && INPUT_SET.size === 3) {
      return true;
    }
    return false;
  }

  // 사용자가 입력한 값을 판단하여 결과를 출력하는 기능
  getComputerOutput() {
    const BALL_STRIKE_MAP = this.getBallAndStrikeMap();
    const BALL_COUNT = BALL_STRIKE_MAP.get('BALL_COUNT');
    const STRIKE_COUNT = BALL_STRIKE_MAP.get('STRIKE_COUNT');
    let result = '';
    if (!BALL_STRIKE_MAP.size) {
      result = '낫싱';
    }
    if (BALL_STRIKE_MAP.size === 1) {
      if (STRIKE_COUNT) {
        result = `${STRIKE_COUNT}스트라이크`;
      }
      if (BALL_COUNT) {
        result = `${BALL_COUNT}볼`;
      }
    }
    if (BALL_STRIKE_MAP.size === 2) {
      result = `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
    }
    MissionUtils.Console.print(result);
  }

  // 사용자가 입력한 값을 볼, 스트라이크로 판단하는 기능
  getBallAndStrikeMap() {
    const BALL_STRIKE_MAP = this.#USER_INPUT.reduce((acc, number, idx) => {
      const IS_INCLUDED = this.#RANDOM_NUMBER.includes(number);
      const RANDOM_INDEX = this.#RANDOM_NUMBER.indexOf(number);
      if (IS_INCLUDED && idx !== RANDOM_INDEX) {
        acc.set('BALL_COUNT', (acc.get('BALL_COUNT') || 0) + 1);
      }
      if (IS_INCLUDED && idx === RANDOM_INDEX) {
        acc.set('STRIKE_COUNT', (acc.get('STRIKE_COUNT') || 0) + 1);
      }
      return acc;
    }, new Map());
    return BALL_STRIKE_MAP;
  }

  play() {
    this.#RANDOM_NUMBER = App.getRandomNumber();
    this.getUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
