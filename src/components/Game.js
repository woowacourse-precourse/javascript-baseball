const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  getUserInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateUserInputNumber(input);
    });
  }

  validateUserInputNumber(input) {
    const INPUT_SET = new Set(input.split(''));

    if (INPUT_SET.size !== 3 || !/^[1-9]+$/g.test(input) || input.length !== 3) {
      throw new Error('조건에 맞는 숫자를 다시 입력해주세요!');
    }

    return true;
  }
}

module.exports = Game;
