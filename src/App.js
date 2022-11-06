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

  static getUserInput() {
    let input;
    MissionUtils.Console.readLine(
      '숫자를 입력해주세요 : ',
      (answer) => { input = answer.trim().split(''); },
    );
    MissionUtils.Console.close();

    if (!App.isValidAnswerValue(input)) {
      throw new Error('잘못된 입력입니다 !!');
    }
    return input.map(Number);
  }

  static isValidAnswerValue(array) {
    let answer = array;

    try {
      answer = array.map(Number);
    } catch (exception) {
      return false;
    }

    if (!answer.reduce(
      (prev, cur) => prev && (MIN_VALID_NUMBER <= cur) && (cur <= MAX_VALID_NUMBER),
      true,
    )) {
      return false;
    }

    if (new Set(answer).size !== GAME_ANSWER_LENGTH) {
      return false;
    }
    return true;
  }
}

module.exports = App;
