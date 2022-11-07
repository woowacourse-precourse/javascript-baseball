const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomList = this.makeRandomNumber();
  }

  play() {
    this.gameStartMsg();
    this.getUserNumber();
  }

  gameStartMsg() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  makeRandomNumber() {
    const randomArr = [];
    while (randomArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(number)) {
        randomArr.push(number);
      }
    }
    return randomArr;
  }

  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.answerNum = answer;
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${this.answerNum}`);
    });
  }
}

module.exports = App;
