const { Console } = require('@woowacourse/mission-utils');

const START_MESSAGE = '숫자 야구 게임을 시작합니다.';
const END_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const ERROR_MESSAGE = '1부터 9까지 서로 다른 3개의 숫자를 입력해주세요.';
const REQUEST_MESSAGE = '숫자를 입력해주세요 : ';
const RESTART_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';

const NOTHING = '낫싱';
const BALL = '볼';
const STRIKE = '스트라이크';

class Message {
  constructor() {}

  static printStart() {
    Console.print(START_MESSAGE);
  }

  static printEnd() {
    Console.print(END_MESSAGE);
  }

  static throwError() {
    throw new Error(ERROR_MESSAGE);
  }

  static printResult(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return Console.print(NOTHING);
    }
    if (ballCount === 0) {
      return Console.print(`${strikeCount}${STRIKE}`);
    }
    if (strikeCount === 0) {
      return Console.print(`${ballCount}${BALL}`);
    }
    Console.print(`${ballCount}${BALL} ${strikeCount}${STRIKE}`);
  }

  static requestInput(callback) {
    Console.readLine(REQUEST_MESSAGE, callback);
  }
}

module.exports = Message;
