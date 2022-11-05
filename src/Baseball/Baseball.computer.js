const MissionUtils = require("@woowacourse/mission-utils");

class BaseballComputer {
  baseballNumbers = [];
  constructor(baseballOutput, baseballValidator) {
    while (this.baseballNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.baseballNumbers.includes(number)) {
        this.baseballNumbers.push(number);
      }
    }
    this.baseballOutput = baseballOutput;
    this.baseballValidator = baseballValidator;
  }
  async getUserNumbers() {
    const userNumbers = await this.baseballOutput.getNumber();
    this.baseballValidator.checkNumbersLength(userNumbers);
    this.baseballValidator.checkNumericNumbers(userNumbers);
    this.baseballValidator.checkOtherNumbers(userNumbers);
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
