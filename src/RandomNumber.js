const MissionUtils = require("@woowacourse/mission-utils");
const CheckConstraints = require("./CheckConstraints");

class RandomNumber {
  // 만약 static을 적용하고 싶다면 this를 활용하지 못하므로, const와 return을 사용
  // 이 클래스는 굳이 this를 사용하지 않아도 된다...
  // 랜덤 숫자 배열을 만들고 export하는게 목적이기 때문
  static makeRandomNumber() {
    const COMPUTER = [];

    while (COMPUTER.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!COMPUTER.includes(number)) {
        COMPUTER.push(number);
      }
    }

    const checkConstraints = new CheckConstraints();
    checkConstraints.checkConstraints(COMPUTER);

    return COMPUTER;
  }
}

module.exports = RandomNumber;
