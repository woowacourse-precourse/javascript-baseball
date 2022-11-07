const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomList = this.makeRandomNumber();
  }

  play() {
    this.gameStartMsg();
    this.gameCourse();
  }

  gameCourse() {
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
      this.exceptionAnwser(answer);
      this.answerNum = answer;
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${this.answerNum}`);
    });
  }

  exceptionAnwser(answer) {
    const userNumber = String(answer).split('').map(Number);

    if (userNumber.length !== 3) throw new Error('세자리 숫자만 입력해주세요.');

    const checkDuplication = new Set(userNumber);
    if (userNumber.length !== checkDuplication.size) throw new Error('중복된 숫자가 있습니다.');

    for (let strNum = 0; strNum < userNumber.length; strNum++) {
      if (Number(userNumber[strNum]) === 0) throw new Error('1~9 범위의 숫자만 입력해주세요.');
    }

    return answer;
  }

}

module.exports = App;
