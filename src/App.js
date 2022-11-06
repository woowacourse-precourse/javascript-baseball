// import * as MissionUtils from '@woowacourse/mission-utils';
const MissionUtils = require('@woowacourse/mission-utils');

const GAME_ANSWER_LENGTH = 3;
const MAX_VALID_NUMBER = 9;
const MIN_VALID_NUMBER = 1;

class App {
  constructor() {
    this.answer = undefined;
    this.input = undefined;
    this.ballCount = 0;
    this.strikeCount = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let isGameEnd = false;
    while (!isGameEnd) {
      this.playSingleGame();
      isGameEnd = App.getGameEndStatus();
    }
  }

  playSingleGame() {
    this.answer = App.generateAnswer();

    while (this.strikeCount !== 3) {
      this.input = App.getUserInput();
      this.countResult();
      this.printResult();
    }

    this.resetGameData();
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

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

    function inputParser(inputString) {
      input = inputString.trim().split('');
    }

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', inputParser);
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

  countResult() {
    this.ballCount = 0;
    this.strikeCount = 0;
    for (let inputIndex = 0; inputIndex < GAME_ANSWER_LENGTH; inputIndex += 1) {
      this.determineBallOrStrike(inputIndex);
    }
  }

  determineBallOrStrike(index) {
    const value = this.input[index];
    if (this.answer[index] === value) {
      this.strikeCount += 1;
    } else if (this.answer.includes(value)) {
      this.ballCount += 1;
    }
  }

  printResult() {
    const result = [];

    if (this.ballCount > 0) {
      result.push(`${this.ballCount}볼`);
    }
    if (this.strikeCount > 0) {
      result.push(`${this.strikeCount}스트라이크`);
    }
    if (result.length === 0) {
      result.push('낫싱');
    }

    MissionUtils.Console.print(result.join(' '));
  }

  resetGameData() {
    this.answer = undefined;
    this.input = undefined;
    this.ballCount = 0;
    this.strikeCount = 0;
  }

  static getGameEndStatus() {
    let input;
    function inputParser(inputString) {
      input = Number(inputString.trim());
    }

    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', inputParser);

    if (input === 1) return false;
    if (input === 2) return true;
    throw new Error('잘못된 입력입니다 !!');
  }
}

module.exports = App;
