const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = this.getComputerNum();
  }

  play() {
    Console.readLine("숫자를 입력해주세요 : ", () => {
      // 숫자 유효성 검사
    });
  }

  getComputerNum() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    return randomNum;
  }
}

module.exports = App;
