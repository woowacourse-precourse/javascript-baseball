const MissionUtils = require("@woowacourse/mission-utils");
const BaseballOutput = require("./Baseball.output");
const BaseballValidator = require("./BaseBall.validator");

class BaseballComputer {
  baseballNumber = [];
  baseballOutput = new BaseballOutput();
  baseballValidator = new BaseballValidator();

  constructor() {
    this.baseballNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  getNumber() {
    const userNumbers = this.baseballOutput.getNumber();
    this.baseballValidator.checkNumericNumbers(...userNumbers);
    this.baseballValidator.checkNumbersLength(...userNumbers);
    this.baseballValidator.checkOtherNumbers(...userNumbers);
    return userNumbers;
  }
}

export default BaseballComputer;
