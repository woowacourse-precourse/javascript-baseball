const MissionUtils = require('@woowacourse/mission-utils');

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
      const uniquePlayerValue = [...new Set(answer)].join('');

      if (answer.length === 3 && /^[1-9]{3}$/.test(uniquePlayerValue)) {
        this.#value = answer;
        this.referee.gameResult();
      } else throw new Error('잘못된 값을 입력했습니다. 게임을 종료합니다.');
    });
  }
}

module.exports = Player;
