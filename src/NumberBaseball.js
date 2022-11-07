const MissionUtils = require('@woowacourse/mission-utils');

class NumberBaseball {
  gameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let answer = this.makeAnswer();
    console.log(answer);

    MissionUtils.Console.close();
  }

  makeAnswer() {
    let pickedNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return pickedNumber;
  }
}
module.exports = NumberBaseball;
