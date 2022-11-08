const MissionUtils = require("@woowacourse/mission-utils");
class BaseBallGame {
  constructor() {
    this.start();
    this.ANSWER = this.generateAnswer();
  }

  start() {
    const OPENING_MENT = "숫자 야구 게임을 시작합니다.";
    MissionUtils.Console.print(OPENING_MENT);
  }

  generateAnswer() {
    const TEMPORARY_STORAGE = [];
    while(TEMPORARY_STORAGE.length < 3) {
      const TEMPORARY_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!TEMPORARY_STORAGE.includes(TEMPORARY_NUMBER)) TEMPORARY_STORAGE.push(TEMPORARY_NUMBER);
    }
    return TEMPORARY_STORAGE.join('');
  }

  isRightForm(inputNum) {
    const REGULAR_EXPRESSION_NUMBER = /^[1-9]+$/;
    const IS_NUMBER = REGULAR_EXPRESSION_NUMBER.test(inputNum);
    const RIGHT_LENGTH = inputNum.length === 3;
    const NOT_DUPLICATE = inputNum[0] !== inputNum[1] && inputNum[1] !== inputNum[2];
    
    return IS_NUMBER && RIGHT_LENGTH && NOT_DUPLICATE;
  }

  isStrike(INPUT_NUM, ANSWER) {
    let STRIKE_COUNT = 0;
    for (let curr_Number of INPUT_NUM) {
      const i = INPUT_NUM.indexOf(curr_Number);
      if (curr_Number === ANSWER[i]) STRIKE_COUNT += 1;
    }
    return STRIKE_COUNT;
  }
}

const game = new BaseBallGame;
game.isStrike('123', '132');

module.exports = BaseBallGame;
