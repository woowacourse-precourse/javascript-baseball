const Validator = require("./validator.js");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getSumOfBallAndStrike(computerNum, userNum) {
    const overlappingNumArr = userNum.filter((num) => {
      computerNum.includes(num);
    });
    return overlappingNumArr.length;
  }
  getStrikeCnt(computerNum, userNum) {
    let strikeCnt = 0;
    for (let i = 0; i < 3; i++) {
      if (computerNum[i] === userNum[i]) strikeCnt++;
    }
    return strikeCnt;
  }
  play() {
    const computerNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.readLine(
      "각 자리 숫자가 1에서 9 사이인 서로 다른 세자리 숫자를 입력해주세요 : ",
      (userInput) => {
        const userNum = userInput.split("");
        const validator = new Validator(userNum);
        if (!validator.isValidInput()) throw new Error("입력값을 확인하세요.");
        const ballAndStrikeCnt = this.getSumOfBallAndStrike(
          computerNum,
          userNum
        );
        const strikeCnt = this.getStrikeCnt(computerNum, userNum);
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
