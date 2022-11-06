// import * as MissionUtils from '@woowacourse/mission-utils';
const MissionUtils = require('@woowacourse/mission-utils');

const GAME_ANSWER_LENGTH = 3;
const MAX_VALID_NUMBER = 9;
const MIN_VALID_NUMBER = 1;

class App {
  play() {}

  static generateAnswer() {
    const answer = [];
    while (answer.length < GAME_ANSWER_LENGTH) {
      App.addUniqueRandomNumber(answer);
    }
    return answer;
  }

  static addUniqueRandomNumber(array) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_VALID_NUMBER, MAX_VALID_NUMBER);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
}

module.exports = App;
