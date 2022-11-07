const MissionUtils = require('@woowacourse/mission-utils');

class Message {
  #print = MissionUtils.Console.print;

  print(text = '') {
    if (!text) {
      throw new Error('문자열을 입력해야 합니다.');
    }

    this.#print(text);
  }

  static start() {
    return '숫자 야구 게임을 시작합니다.';
  }

  static end() {
    return '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
  }

  static confirm() {
    return '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n';
  }

  static input() {
    return '숫자를 입력해 주세요 : ';
  }
}

module.exports = Message;
