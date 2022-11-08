const MissionUtils = require('@woowacourse/mission-utils');
const isAvailableValue = require('./utils/isAvailableValue');

class Player {
  #value;
  constructor(referee) {
    this.referee = referee;
    this.#value = '';
  }

  getValue() {
    return this.#value;
  }

  setValue() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if (isAvailableValue(answer)) {
        this.#value = answer;
        this.referee.gameResult();
      } else throw new Error('잘못된 값을 입력했습니다. 게임을 종료합니다.');
    });
  }
}

module.exports = Player;
