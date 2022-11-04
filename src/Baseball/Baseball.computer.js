const MissionUtils = require("@woowacourse/mission-utils");
const BaseballOutput = require("./Baseball.output");
const BaseballValidator = require("./BaseBall.validator");

class BaseballComputer {
  baseballNumbers = [];
  baseballOutput = new BaseballOutput();
  baseballValidator = new BaseballValidator();

  constructor() {
    this.baseballNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
  }
  getUserNumbers() {
    const userNumbers = this.baseballOutput.getNumber();
    this.baseballValidator.checkNumericNumbers(...userNumbers);
    this.baseballValidator.checkNumbersLength(...userNumbers);
    this.baseballValidator.checkOtherNumbers(...userNumbers);
    return userNumbers;
  }
  getBallState(userNumbers) {
    return this.baseballValidator.checkBallState(
      this.baseballNumbers,
      userNumbers
    );
  }
}

export default BaseballComputer;
