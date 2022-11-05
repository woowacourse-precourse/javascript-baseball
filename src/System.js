const MissionUtils = require("@woowacourse/mission-utils");

class System {
  constructor() {
    this.numberArray;
  }

  set setNumber(numberArray) {
    this.numberArray = numberArray;
  }

  get getNumber() {
    return this.numberArray;
  }

  getStarted() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  chooseNumber() {
    const numberArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.setNumber = numberArray;
  }

  requestEnterNumbers() {
    MissionUtils.Console.print("숫자를 입력해주세요 : ");
  }

  isStrike(answer) {}
}

module.exports = System;
