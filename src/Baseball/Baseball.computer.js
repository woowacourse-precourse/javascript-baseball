const MissionUtils = require("@woowacourse/mission-utils");

class BaseballComputer {
  constructor(baseballOutput, baseballValidator) {
    this.baseballNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
    this.baseBallOutput = baseballOutput;
    this.baseballValidator = baseballValidator;
  }
  getUserNumbers() {
    const userNumbers = this.baseballOutput.getNumber();
    this.baseballValidator.checkNumericNumbers(...userNumbers);
    this.baseballValidator.checkNumbersLength(...userNumbers);
    this.baseballValidator.checkOtherNumbers(...userNumbers);
    return userNumbers;
  }
  getBallState(userNumbers) {
    const baseballDto = this.baseballValidator.checkBallState(
      this.baseballNumbers,
      userNumbers
    );
    this.baseBallOutput.result(baseballDto);
    return baseballDto;
  }
  isFinish(baseballDto) {
    if (this.baseballValidator.isFinish(baseballDto)) {
      this.baseballOutput.end();
      return true;
    }
    return false;
  }
  restart() {
    const restartValue = this.baseballOutput.restart();
    return this.baseballValidator.checkRestartValue(restartValue) === 1;
  }
}

module.exports = BaseballComputer;
