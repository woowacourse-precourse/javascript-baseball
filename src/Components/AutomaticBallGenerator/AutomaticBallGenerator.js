const { Random } = require("@woowacourse/mission-utils");

class AutomaticBallGenerator {
  execute() {
    return Random.pickNumberInRange(1, 10);
  }
}

module.exports = AutomaticBallGenerator;
