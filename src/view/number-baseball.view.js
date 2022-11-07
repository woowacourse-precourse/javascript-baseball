const MissionUtils = require('@woowacourse/mission-utils');

const CONSTANTS = require('../constant');

class NumberBaseballView {
  entry() {
    console.log('숫자 야구 게임을 시작합니다.');
  }

  showResult(result) {
    if (result.nothing === CONSTANTS.INPUT_LENGTH) {
      MissionUtils.Console.print('낫싱');
      return;
    }

    const ballOutput = `${result.ball !== 0 ? result.ball + '볼 ' : ''}`;
    const strikeOutput = `${result.strike !== 0 ? result.strike + '스트라이크' : ''}`;
    const output = ballOutput + strikeOutput;
    MissionUtils.Console.print(output);
  }

  end() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }
}

module.exports = NumberBaseballView;
