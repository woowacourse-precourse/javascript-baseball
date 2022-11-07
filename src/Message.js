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
}

module.exports = Message;
