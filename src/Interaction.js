const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class Interaction {
  constructor() {}

  static printPlayMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  printResponseMessage() {
    Console.readLine('숫자를 입력해주세요 : ', this.emit);
  }

  emit(answer) {
    if (this.isValidResponse(answer)) {
      return -1;
    }
    return answer;
  }

  isValidResponse(answer) {
    return this.isNumberType(answer) && this.isDuplicate(answer) && this.isNumberType;
  }

  isNumberType(answer) {
    return typeof answer === 'number';
  }

  isThreeDigit(answer) {
    return answer.length === 3;
  }

  isDuplicate(answer) {
    return [...String(answer)].length === new Set([...String(answer)]).size;
  }
}

module.exports = Interaction;
