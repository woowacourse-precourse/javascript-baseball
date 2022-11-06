const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #randomNumber = [];

  #userInput = [];

  play() {
    this.#randomNumber = App.getRandomNumber();
    this.getUserInput();
  }

  // 컴퓨터가 사용할 랜덤한 숫자를 구하는 기능
  static getRandomNumber() {
    const randomSet = new Set();
    while (randomSet.size < 3) {
      randomSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...randomSet];
  }

  // 사용자의 입력을 받는 기능
  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      if (!App.isValidUserInput(answer)) {
        throw new Error('잘못된 값을 입력하였습니다!');
      }
      this.#userInput = [...answer].map(number => +number);
      this.getComputerOutput();
    });
  }

  // 사용자가 입력한 값이 적절한지 검증하는 기능
  static isValidUserInput(input) {
    const REGEX = /^[1-9]{3}$/;
    if (REGEX.test(input) && new Set(input).size === 3) {
      return true;
    }
    return false;
  }

  // 사용자가 입력한 값을 판단하여 결과를 출력하는 기능
  getComputerOutput() {
    const ballStrikeMap = this.getBallAndStrikeMap();
    const ball = ballStrikeMap.get('BALL');
    const strike = ballStrikeMap.get('STRIKE');
    let result = '';
    if (!ballStrikeMap.size) {
      result = '낫싱';
    }
    if (ballStrikeMap.size === 1) {
      if (strike) {
        result = `${strike}스트라이크`;
      }
      if (ball) {
        result = `${ball}볼`;
      }
    }
    if (ballStrikeMap.size === 2) {
      result = `${ball}볼 ${strike}스트라이크`;
    }
    MissionUtils.Console.print(result);
  }

  // 사용자가 입력한 값을 볼, 스트라이크로 판단하는 기능
  getBallAndStrikeMap() {
    const ballStrikeMap = this.#userInput.reduce((acc, number, idx) => {
      const isIncluded = this.#randomNumber.includes(number);
      const targetIndex = this.#randomNumber.indexOf(number);
      if (isIncluded && idx !== targetIndex) {
        acc.set('BALL_COUNT', (acc.get('BALL_COUNT') || 0) + 1);
      }
      if (isIncluded && idx === targetIndex) {
        acc.set('STRIKE_COUNT', (acc.get('STRIKE_COUNT') || 0) + 1);
      }
      return acc;
    }, new Map());
    return ballStrikeMap;
  }
}

const app = new App();
app.play();

module.exports = App;
