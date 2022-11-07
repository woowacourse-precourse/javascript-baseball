const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {}
}

function createAnswer() {
  let answer = [];
  answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return answer;
}
module.exports = App;
