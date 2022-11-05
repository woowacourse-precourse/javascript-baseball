const MissionUtils = require('@woowacourse/mission-utils');
const utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },
};
class App {
  play() {
    utils.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = App;
