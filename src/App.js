const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #RANDOM_NUMBER = 0;

  #userInput = 0;

  // 컴퓨터가 사용할 랜덤한 숫자를 구하는 기능
  static getRandomNumber() {
    const RANDOM_SET = new Set();
    while (RANDOM_SET.size < 3) {
      RANDOM_SET.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    const RANDOM_NUMBER = Number([...RANDOM_SET].join(''));
    return RANDOM_NUMBER;
  }

  // 사용자의 입력을 받는 기능
  setUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', answer => {
      this.#userInput = answer;
    });
  }

  // 사용자가 입력한 값이 적절한지 검증하는 기능
  static validateUserInput(input) {
    const REGEX = /^[1-9]{3}$/;
    const INPUT_SET = new Set(input);
    if (REGEX.test(input) && INPUT_SET.size === 3) {
      return true;
    }
    return false;
  }

  play() {
    this.#RANDOM_NUMBER = App.getRandomNumber();
    this.setUserInput();
  }
}

const app = new App();
app.play();

module.exports = App;
